import React from "react";
import { useTranslation } from "react-i18next";
import NetworkForm from './form';
import WithTip from "components/with-tip";
import "./index.less";


const Network = props => {
  const { t } = useTranslation();
  const configTrans = t("config");

  return (
    <div className="network-wrapper">
      <div className="header">
        <h2>{configTrans.network}</h2>
        <WithTip text={t("restartNotify")}></WithTip>
      </div>
      <NetworkForm></NetworkForm>
    </div>
  );
};

export default Network;
