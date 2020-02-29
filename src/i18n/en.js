export default {
  lang: "en",
  restartNotify: "Config will become effective after milvus restart. ",
  submitSuccess: "Submit Success",
  copySuccess: "Copy Success",
  disconnect: "Are you sure disconnect with ",
  connectTitle: "Connect Milvus",
  recentConnect: "Recent Connections",
  monitor: {
    title: "Mintors",
    log: "Log Monitor",
    pm: "Performance Monitor"
  },
  notification: {
    restart: {
      title: "Config Changed",
      desc: "Config will become effective after milvus restart."
    }
  },
  login: {
    host: "Host",
    port: "Port",
    connect: "Connect"
  },
  config: {
    title: "Configuration",
    network: "Network Access",
    storage: "Storage Path",
    advanced: "Advanced Settings",
    hardware: "Hardware Resources",
    metrics: "Metrics",
    others: "Others"
  },
  dataManage: {
    title: "Data Management",
    collections: "Collections",
    partition: "Partition",
    vector: "Vector Search"
  },
  storage: {
    data: {
      title: "Data Path",
      primary: "Primary Path",
      second: "Secondary Path",
      primaryTip: "Primary directory used for both the vector data files you want to import, and the metadata.	Make sure the space left is enough.",
      secondTip: "A semicolon-separated list of secondary directories used only for the vector data files imported into Milvus. Set this parameter when the data size is too much to fit in the primary_path.Each file, whether in primary_path or secondary_path, is assigned an equal part of the imported data. Data Size per Directory = Total Data Size / Number of Directories. So make sure the available storage space in these files are enough."
    },

    metadata: {
      title: "Meta Data Path",
      type: "Type",
      host: "Host",
      username: "Username",
      password: "Password",
      port: "Port"
    },
    error: {
      second: "Secondary Path cant be empty"
    }
  },
  network: {
    address: "Listening Address",
    port: "Listening Port"
  },
  metrics: {
    enable: "Enabled",
    address: "Push Address",
    port: "Push Port"
  },
  others: {
    logServer: "Log Server",
    pmServer: "Performance Monitor Server"
  },
  table: {
    create: "New Table",
    index: "Create Index for",
    indexType: "Index Type",
    nlist: "nlist",
    saveSuccess: "Create Table Success",
    delete: "Delete Table Success",
    confirmDel: "Are you sure to delete table",
    deleteTable: "Delete Table",
    searchTxt: "Table Name",
    updateIndex: "Update Index",
    partitions: "Patitions",
    tName: "Name",
    tDimension: "Dimension",
    tMetric: "Metric Type",
    tIndex: "Index",
    tAction: "Action",
    fileSize: "Index File Size (MB)",
    error: {
      name: "Table Name is required"
    },
    tips: {
      name: "The name of the table to create, which must be unique within its database. Begin a table name with a letter or an underscore (_) . Subsequent characters can be letters, underscores, numbers (0-9). The entire length can not exceed 255 characters.",
      fileSize: "Threshold value that triggers index building for raw data files. Index creation is controlled by the size of raw data files specified in this parameter, with a default of 1024 MB. Data files with smaller sizes will not have indexes built. "
    }
  },
  partition: {
    tip: "Please search partitions by table name.",
    create: "New Partition",
    saveSuccess: "Create Partition Success",
    delete: "Delete Partition Success",
    confirmDel: "Are you sure to delete partition",
    deletePartition: "Delete Partition",
    searchTxt: "Table Name",
    tag: "Partition Tag",
    name: "Partition Name",
    tableName: "Table Name",
    action: "Action ",

  },
  hardware: {
    saveSuccess: "Save Gpu Configs Success",
    enable: "Enable GPU",
    capacity: "GPU Cache Capacity (GB)",
    search: "Enabled for Searching",
    index: "Enabled for Building Index",
    searchAtLeastOne: "Need at least one GPU for searching",
    buildAtLeastOne: "Need at least one GPU for building index",
    cpuVersion: "Your milvus version is CPU version."
  },
  advanced: {
    cacheSetting: "Caches ",
    performanceSetting: "Performance Tunning",
    tableSetting: "Tables",

    cpu_capacity: "CPU Cache Capacity",
    cpu_threshold: "CPU Cache Threshold",
    gpu_capacity: "GPU Cache Capacity",
    gpu_threshold: "GPU Cache Threshold",

    cpu_capacity_desc: 'The size of the CPU memory for caching data for faster query. The sum of cpu_cache_capacity and insert_buffer_size (in "Section db_config) must be less than total CPU memory size.	',
    cpu_threshold_desc: "The percentage of data that can be kept in the CPU memory when the CPU cache is full.For example, the default value indicates that 85% of data stored in the CPU cache doesn't need to be discarded. The value should be 0 - 1.",

    gpu_capacity_desc: "The size of the GPU memory for caching data for faster query. The size must be less than the total GPU memory size.	",
    gpu_threshold_desc: "The percentage of data that can be kept in the GPU memory when the GPU cache is full. For example, the default value indicates that 85% of data stored in the GPU cache doesn't need to be discarded. The value should be 0 - 1.",

    catch_insert_data: 'catch_insert_data',
    catch_insert_data_desc: "If set to true , the inserted data will be loaded into the cache immediately for hot query. If you want simultaneous inserting and searching of vector, it is recommended to enable this function.	",

    insert_buffer_size: 'insert_buffer_size',
    insert_buffer_size_desc: "maximum insert buffer size allowed, must be a positive integer sum of insert_buffer_size and cpu_cache_capacity cannot exceed total memory",

    saveSuccess: "Update Configs Success",
    insert: "Cache Insert Data",
    blasThreshold: "Use Blas Threshold",
    gpuThreshold: "GPU search threshold",

    insertDesc1: "Whether to load inserted data into cache immediately for hot query. If you want to simultaneously insert and query vectors, it's recommended to enable this function. ",
    insertDesc2: "If you want simultaneous inserting and searching of vector, it is recommended to enable this function.",
    blasDesc: "A Milvus performance tuning parameter. This value will be compared with 'nq' (the number of query vectors) to decide if OpenBLAS should be used. If nq >= Use Blas Threshold, OpenBLAS will be used. Search response times will be stable but the search speed will be slower; if nq < Use Blas Threshold, SSE will be used. The search speed will be faster but search response times will fluctuate. ",
    engin: "Engine ",
    preload_table: {
      title: 'Preload Table',
      desc: "preload data at startup, '*' means load all tables, empty value means no preload you can specify preload tables like this: table1,table2,table3",

    },

  },
  vector: {
    tName: "Table Name",
    tTop: "TopK",
    tNprobe: "Nprobe",
    tQuery: "Query Vector",
    distance: "Distance",
    search: "Search Vector",
    tips: {
      tTop: "The top k most similar results of each query vector. ",
      tNprobe: "Number of queried vector buckets. Nprobe affects search precision. The greater the value, the more precise the result, yet the slower the search speed.",
      tQuery: "One target vector to be searched in the table. It must be the float data type, with the same dimension as that defined for the table."
    }
  },
  button: {
    cancel: "Cancel",
    save: "Save",
    reset: "Reset",
    update: "Update",
    search: "Search",
    confirm: "Confirm"
  },
  required: " is required",
  index: {
    saveSuccess: "Create Index Success",
    deleteSuccess: "Delete Index Success"
  }
};