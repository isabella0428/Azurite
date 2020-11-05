/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
// tslint:disable:object-literal-sort-keys

import * as msRest from "@azure/ms-rest-js";

import * as Mappers from "./mappers";
import { Operation } from "./operation";
import * as Parameters from "./parameters";

const serializer = new msRest.Serializer(Mappers, true);
// specifications for new method group start
const tableQueryOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Tables",
  urlParameters: [Parameters.url],
  queryParameters: [
    Parameters.nextTableName,
    Parameters.format,
    Parameters.top,
    Parameters.select,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TableQueryResponse,
      headersMapper: Mappers.TableQueryHeaders
    },
    default: {}
  },
  isXML: true,
  serializer
};

const tableCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Tables",
  urlParameters: [Parameters.url],
  queryParameters: [Parameters.format],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.responsePreference
  ],
  requestBody: {
    parameterPath: "tableProperties",
    mapper: {
      ...Mappers.TableProperties,
      required: true
    }
  },
  contentType: "application/json;odata=nometadata; charset=utf-8",
  responses: {
    201: {
      bodyMapper: Mappers.TableResponse,
      headersMapper: Mappers.TableCreateHeaders
    },
    204: {
      headersMapper: Mappers.TableCreateHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError
    }
  },
  isXML: true,
  serializer
};

const tableBatchOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "$batch",
  urlParameters: [
    Parameters.url
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.multipartContentType,
    Parameters.contentLength
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      required: true,
      serializedName: "body",
      type: {
        name: "Stream"
      }
    }
  },
  contentType: "application/json;odata=nometadata; charset=utf-8",
  responses: {
    202: {
      bodyMapper: {
        serializedName: "Stream",
        type: {
          name: "Stream"
        }
      },
      headersMapper: Mappers.TableBatchHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError
    }
  },
  isXML: true,
  serializer
};

const tableDeleteOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "Tables('{table}')",
  urlParameters: [Parameters.url, Parameters.table],
  headerParameters: [Parameters.version, Parameters.requestId],
  responses: {
    204: {
      headersMapper: Mappers.TableDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError
    }
  },
  isXML: true,
  serializer
};

const tableQueryEntitiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{table}()",
  urlParameters: [Parameters.url, Parameters.table],
  queryParameters: [
    Parameters.timeout,
    Parameters.nextPartitionKey,
    Parameters.nextRowKey,
    Parameters.format,
    Parameters.top,
    Parameters.select,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TableEntityQueryResponse,
      headersMapper: Mappers.TableQueryEntitiesHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError
    }
  },
  isXML: true,
  serializer
};

const tableQueryEntitiesWithPartitionAndRowKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",
  urlParameters: [
    Parameters.url,
    Parameters.table,
    Parameters.partitionKey,
    Parameters.rowKey
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.format,
    Parameters.select,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TableEntityQueryResponse,
      headersMapper: Mappers.TableQueryEntitiesWithPartitionAndRowKeyHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError
    }
  },
  isXML: true,
  serializer
};

const tableUpdateEntityOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",
  urlParameters: [
    Parameters.url,
    Parameters.table,
    Parameters.partitionKey,
    Parameters.rowKey
  ],
  queryParameters: [Parameters.timeout, Parameters.format],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.ifMatch0
  ],
  requestBody: {
    parameterPath: ["options", "tableEntityProperties"],
    mapper: {
      serializedName: "tableEntityProperties",
      type: {
        name: "Dictionary",
        value: {
          type: {
            name: "Object"
          }
        }
      }
    }
  },
  responses: {
    204: {
      headersMapper: Mappers.TableUpdateEntityHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError
    }
  },
  isXML: true,
  serializer
};

const tableMergeEntityOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",
  urlParameters: [
    Parameters.url,
    Parameters.table,
    Parameters.partitionKey,
    Parameters.rowKey
  ],
  queryParameters: [Parameters.timeout, Parameters.format],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.ifMatch0
  ],
  requestBody: {
    parameterPath: ["options", "tableEntityProperties"],
    mapper: {
      serializedName: "tableEntityProperties",
      type: {
        name: "Dictionary",
        value: {
          type: {
            name: "Object"
          }
        }
      }
    }
  },
  responses: {
    204: {
      headersMapper: Mappers.TableMergeEntityHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError
    }
  },
  isXML: true,
  serializer
};

const tableDeleteEntityOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",
  urlParameters: [
    Parameters.url,
    Parameters.table,
    Parameters.partitionKey,
    Parameters.rowKey
  ],
  queryParameters: [Parameters.timeout, Parameters.format],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.ifMatch1
  ],
  responses: {
    204: {
      headersMapper: Mappers.TableDeleteEntityHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError
    }
  },
  isXML: true,
  serializer
};

const tableMergeEntityWithMergeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",
  urlParameters: [
    Parameters.url,
    Parameters.table,
    Parameters.partitionKey,
    Parameters.rowKey
  ],
  queryParameters: [Parameters.timeout, Parameters.format],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.ifMatch0
  ],
  requestBody: {
    parameterPath: ["options", "tableEntityProperties"],
    mapper: {
      serializedName: "tableEntityProperties",
      type: {
        name: "Dictionary",
        value: {
          type: {
            name: "Object"
          }
        }
      }
    }
  },
  responses: {
    204: {
      headersMapper: Mappers.TableMergeEntityWithMergeHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError
    }
  },
  isXML: true,
  serializer
};

const tableInsertEntityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "{table}",
  urlParameters: [Parameters.url, Parameters.table],
  queryParameters: [Parameters.timeout, Parameters.format],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.responsePreference
  ],
  requestBody: {
    parameterPath: ["options", "tableEntityProperties"],
    mapper: {
      serializedName: "tableEntityProperties",
      type: {
        name: "Dictionary",
        value: {
          type: {
            name: "Object"
          }
        }
      }
    }
  },
  contentType: "application/json;odata=nometadata; charset=utf-8",
  responses: {
    201: {
      bodyMapper: {
        serializedName: "Stream",
        type: {
          name: "Stream"
        }
      },
      headersMapper: Mappers.TableInsertEntityHeaders
    },
    204: {
      headersMapper: Mappers.TableInsertEntityHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError
    }
  },
  isXML: true,
  serializer
};

const tableGetAccessPolicyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{table}",
  urlParameters: [Parameters.url, Parameters.table],
  queryParameters: [Parameters.timeout, Parameters.comp0],
  headerParameters: [Parameters.version, Parameters.requestId],
  responses: {
    200: {
      bodyMapper: {
        xmlElementName: "SignedIdentifier",
        serializedName: "SignedIdentifiers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignedIdentifier"
            }
          }
        }
      },
      headersMapper: Mappers.TableGetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError
    }
  },
  isXML: true,
  serializer
};

const tableSetAccessPolicyOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{table}",
  urlParameters: [Parameters.url, Parameters.table],
  queryParameters: [Parameters.timeout, Parameters.comp0],
  headerParameters: [Parameters.version, Parameters.requestId],
  requestBody: {
    parameterPath: ["options", "tableAcl"],
    mapper: {
      xmlName: "SignedIdentifiers",
      xmlElementName: "SignedIdentifier",
      serializedName: "tableAcl",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "SignedIdentifier"
          }
        }
      }
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    204: {
      headersMapper: Mappers.TableSetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError
    }
  },
  isXML: true,
  serializer
};

// specifications for new method group start
const serviceSetPropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  urlParameters: [Parameters.url],
  queryParameters: [Parameters.timeout, Parameters.restype, Parameters.comp1],
  headerParameters: [Parameters.version, Parameters.requestId],
  requestBody: {
    parameterPath: "tableServiceProperties",
    mapper: {
      ...Mappers.TableServiceProperties,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    202: {
      headersMapper: Mappers.ServiceSetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError
    }
  },
  isXML: true,
  serializer
};

const serviceGetPropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  urlParameters: [Parameters.url],
  queryParameters: [Parameters.timeout, Parameters.restype, Parameters.comp1],
  headerParameters: [Parameters.version, Parameters.requestId],
  responses: {
    200: {
      bodyMapper: Mappers.TableServiceProperties,
      headersMapper: Mappers.ServiceGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError
    }
  },
  isXML: true,
  serializer
};

const serviceGetStatisticsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  urlParameters: [Parameters.url],
  queryParameters: [Parameters.timeout, Parameters.restype, Parameters.comp2],
  headerParameters: [Parameters.version, Parameters.requestId],
  responses: {
    200: {
      bodyMapper: Mappers.TableServiceStats,
      headersMapper: Mappers.ServiceGetStatisticsHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError
    }
  },
  isXML: true,
  serializer
};

const Specifications: { [key: number]: msRest.OperationSpec } = {};
Specifications[Operation.Table_Query] = tableQueryOperationSpec;
Specifications[Operation.Table_Create] = tableCreateOperationSpec;
Specifications[Operation.Table_Batch] = tableBatchOperationSpec;
Specifications[Operation.Table_Delete] = tableDeleteOperationSpec;
Specifications[Operation.Table_QueryEntities] = tableQueryEntitiesOperationSpec;
Specifications[
  Operation.Table_QueryEntitiesWithPartitionAndRowKey
] = tableQueryEntitiesWithPartitionAndRowKeyOperationSpec;
Specifications[Operation.Table_UpdateEntity] = tableUpdateEntityOperationSpec;
Specifications[Operation.Table_MergeEntity] = tableMergeEntityOperationSpec;
Specifications[Operation.Table_DeleteEntity] = tableDeleteEntityOperationSpec;
Specifications[
  Operation.Table_MergeEntityWithMerge
] = tableMergeEntityWithMergeOperationSpec;
Specifications[Operation.Table_InsertEntity] = tableInsertEntityOperationSpec;
Specifications[
  Operation.Table_GetAccessPolicy
] = tableGetAccessPolicyOperationSpec;
Specifications[
  Operation.Table_SetAccessPolicy
] = tableSetAccessPolicyOperationSpec;
Specifications[
  Operation.Service_SetProperties
] = serviceSetPropertiesOperationSpec;
Specifications[
  Operation.Service_GetProperties
] = serviceGetPropertiesOperationSpec;
Specifications[
  Operation.Service_GetStatistics
] = serviceGetStatisticsOperationSpec;
export default Specifications;
