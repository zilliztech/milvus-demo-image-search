import React, { useState, useEffect, useContext, useMemo } from "react";
import { useHistory } from 'react-router-dom'
import { Tab, Paper, Box } from '@material-ui/core'

import {
  Button,
  Table,
  Divider,
  // Icon,
  Modal,
  Input,
  Popconfirm,
  message
} from "antd";
import { useDataPageStyles } from '../../hooks/page'
import { useTranslation } from "react-i18next";
import TableForm from "./table-form";
import IndexForm from "./index-form";
import { httpContext } from '../../context/http'
import { dataManagementContext } from '../../context/data-management'
import { KEYS } from '../../reducers/data-management'
import { UPDATE } from '../../consts'
import "./index.less";

const { Search } = Input;
const PAGE_SIZE = 10;
const TableManage = props => {
  const { getTables, deleteTable, searchTable, currentAddress } = useContext(httpContext)
  const { dataManagement, setDataManagement } = useContext(dataManagementContext)
  const history = useHistory()
  const classes = useDataPageStyles()
  const { t } = useTranslation();
  const tableTrans = t("table");
  const dataManageTrans = t("dataManage");

  const [visible, setVisible] = useState(false);
  const [record, setRecord] = useState("");
  const [type, setType] = useState("table");

  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(1);

  const { data } = useMemo(() => {
    const { data = null } = dataManagement[KEYS.table][currentAddress] || {}
    console.log("in", dataManagement)
    return { data }
  }, [dataManagement, currentAddress])
  console.log(data)
  const createTable = () => {
    setType("table");
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleGoPartitions = record => {
    history.push(`/data/table/${record.table_name}/partitions`)
  }

  const handleAddIndex = record => {
    setType("index");
    setVisible(true);
    setRecord(record);
  };
  const handleDelete = async record => {
    await deleteTable(record.table_name);
    getFirstPage();
    setCurrent(1);
    message.success(tableTrans.delete);
  };
  const fetchData = async () => {
    const res = await getTables({ offset, page_size: PAGE_SIZE });
    if (res && res.tables) {
      setDataManagement(
        {
          type: UPDATE,
          payload: {
            id: currentAddress,
            key: KEYS.table,
            value: {
              data: res.tables.map(v => ({
                ...v,
                key: v.table_name
              }))
            }
          }
        }
      );
      setCount(res.count);
    }
  };

  const saveSuccess = txt => {
    setVisible(false);
    getFirstPage();
    setCurrent(1);
    message.success(txt);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, currentAddress]);

  const columns = [
    {
      title: tableTrans.tName,
      dataIndex: "table_name",
      key: "table_name"
    },
    {
      title: tableTrans.tDimension,
      dataIndex: "dimension",
      key: "dimension"
    },

    {
      title: tableTrans.tMetric,
      dataIndex: "metric_type",
      key: "metric_type"
    },
    {
      title: tableTrans.fileSize,
      dataIndex: "index_file_size",
      key: "index_file_size"
    },
    {
      title: tableTrans.tIndex,
      dataIndex: "index",
      key: "index"
    },
    {
      title: "nlist",
      dataIndex: "nlist",
      key: "nlist"
    },
    {
      title: tableTrans.tAction,
      key: "action",
      render: (text, record) => {
        return (
          <span>
            <span
              style={{ fontSize: "12px", color: "#FAFAFA", cursor: "pointer" }}
              onClick={() => {
                handleGoPartitions(record);
              }}
            >
              {tableTrans.partitions}
            </span>
            <Divider type="vertical" />
            <span
              style={{ fontSize: "12px", color: "#FAFAFA", cursor: "pointer" }}
              onClick={() => {
                handleAddIndex(record);
              }}
            >
              {tableTrans.updateIndex}
            </span>
            <Divider type="vertical" />
            <Popconfirm
              placement="top"
              title={`${tableTrans.confirmDel} ${record.table_name} ?`}
              onConfirm={() => {
                handleDelete(record);
              }}
              okText="Delete"
              cancelText="Cancel"
            >
              {/* <Icon type="delete" style={{ color: "#FAFAFA" }}></Icon> */}
              <span
                style={{
                  fontSize: "12px",
                  color: "#FAFAFA",
                  cursor: "pointer"
                }}
              >
                {tableTrans.deleteTable}
              </span>
            </Popconfirm>
          </span>
        );
      }
    }
  ];

  const handleSearch = async name => {
    setCurrent(1);
    if (!name) {
      getFirstPage();
      return;
    }
    const res = (await searchTable(name)) || {};

    setDataManagement({
      type: UPDATE,
      payload: {
        id: currentAddress,
        key: KEYS.table,
        value: {
          data: [{ ...res, key: res.table_name }]
        }
      }

    });
    setCount(1);
  };

  const getFirstPage = () => {
    if (offset === 0) {
      fetchData();
    } else {
      setOffset(0);
    }
  };

  const handlePageChange = async page => {
    setOffset((page - 1) * PAGE_SIZE);
    setCurrent(page);
  };
  return (
    <div className={`${classes.root} table-wrapper`}>
      {/* <div className="header">
        <h2>{dataManageTrans.table}</h2>
      </div> */}
      <Paper className={classes.paper}>
        <Box p={2}>
          <div className="control">
            <div onClick={createTable} style={{ cursor: "pointer" }}>
              <Button
                className="mr-10 circle-btn"
                type="primary"
                shape="circle"
                icon="plus"
              />
              <span>{tableTrans.create}</span>
            </div>
            <Search
              placeholder={tableTrans.searchTxt}
              onSearch={handleSearch}
              style={{ width: 200 }}
            />
          </div>
          <Table
            columns={columns}
            className="table-wrapper"
            size="middle"
            pagination={{
              current,
              total: count,
              onChange: handlePageChange,
              pageSize: PAGE_SIZE
            }}
            dataSource={data}
          />
        </Box>
      </Paper>

      <Modal
        title={
          type === "table"
            ? `${tableTrans.create}`
            : `${tableTrans.index} ${record.table_name}`
        }
        visible={visible}
        footer={null}
        onCancel={handleCancel}
        wrapClassName="my-modal"
        centered={true}
        width={528}
      >
        {type === "table" ? (
          <TableForm
            handleCancel={handleCancel}
            saveSuccess={saveSuccess}
          ></TableForm>
        ) : (
            <IndexForm
              handleCancel={handleCancel}
              record={record}
              saveSuccess={saveSuccess}
            ></IndexForm>
          )}
      </Modal>
    </div>
  );
};

export default TableManage;
