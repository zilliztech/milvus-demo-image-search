export default {
  lang: "en",
  config: {
    title: "Configuration",
    advanced: "Advanced Settings",
    hardware: "Hardware Resources"
  },
  dataManage: {
    title: "Data Management",
    table: "Table and Index"
  },
  table: {
    create: "New Table",
    index: "Update Index for",
    saveSuccess: "Create Table Success",
    delete: "Delete Table Success",
    confirmDel: "Are you sure to delete table",
    searchTxt: "Table Name"
  },
  hardware: {
    saveSuccess: "Save Gpu Configs Success"
  },
  advanced: {
    saveSuccess: "Update Configs Success",
    cacheSetting: "Caches Setting",
    capacity: "CPU Cache Capacity",
    insert: "Cache Insert Data",
    capacityDesc1:
      "The size of the CPU memory for caching data for faster query. ",
    capacityDesc2:
      "The sum of cpu_cache_capacity and insert_buffer_size (in Section db_config) mustbe less than total CPU memory size.",
    insertDesc1:
      "If set to true , the inserted data will be loaded into the cache immediately for hot query.",
    insertDesc2:
      "If you want simultaneous inserting and searching of vector, it is recommended to enable this function."
  },
  button: {
    cancel: "Cancel",
    save: "Save",
    update: "Update"
  },
  index: {
    saveSuccess: "Create Index Success"
  }
};
