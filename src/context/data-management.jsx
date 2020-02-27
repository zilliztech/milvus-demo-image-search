import React, { useReducer, useContext, useEffect, useState } from 'react'
import { INIT } from '../consts'
import DataManagementReducer, { KEYS } from '../reducers/data-management'
import { httpContext } from './http'
export const dataManagementContext = React.createContext({
  dataManagement: {},
  setDataManagement: () => { },
  refresh: false,
  setRefresh: (refresh) => { }
})


const { Provider } = dataManagementContext

export const DataManagementProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false)
  const { currentAddress } = useContext(httpContext)
  const [dataManagement, setDataManagement] = useReducer(DataManagementReducer, {
    /**
     *  data // search result
        formInit, // form value
     */
    vectorSearch: {},
    /**
     * data // search result
     */
    table: {},
    /**
     * tableName // for search partition
     * data // search result
     */
    partition: {}
  });

  useEffect(() => {
    if (!currentAddress || dataManagement[KEYS.vectorSearch][currentAddress]) return
    setDataManagement({
      type: INIT,
      payload: {
        keys: [KEYS.vectorSearch, KEYS.table, KEYS.partition],
        id: currentAddress,
        values: {
          [KEYS.vectorSearch]: {
            formInit: {},
            data: null
          },
          [KEYS.table]: {
            data: null
          },
          [KEYS.partition]: {
            tableName: "",
            data: null
          }
        }
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAddress])

  return <Provider value={{ dataManagement, setDataManagement, refresh, setRefresh }}>{children}</Provider>
}
