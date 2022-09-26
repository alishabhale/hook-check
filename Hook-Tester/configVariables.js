var config = {
  "Inventory": {
    "APIURL": "https://elpis.opstrakker.local:5000/inventory",
    "APIAuthToken": "b3RhcGl1c2VyOk9wc1RyQGtrZXIx"
  },
  "OSIPI": {
    "OSIPIURL": "https://opstrakkerhistorian.eisinc.com",
    "OSIPIAuthToken": "T1BTVFJLXG9zaXBpaW50ZXJmYWNlOk9wc1RyQGtrZXIx",
    "OSIPIAFServer": "PALLAS",
    "OSIPIAFDatabase": "OpsTrakker"
  },
  "WebAPI": {
    "WebAPIURL": "https://opstrakkerdevit.eisinc.com:8893/OpsTrakkerWebAPI/",
    "WebAPIAuthToken": "b3RhcGl1c2VyOk9wc1RyQGtrZXIx",
    "PlantListItemsUri": "v1/plant-list-items/",
    "PlantID": "1000",
    "Timezone": "Asia/Kolkata"
  },
  "reportRendition": {
    "antigenOrder": [
      {
        "name": "H1N1",
        "seqNbr": 1
      },
      {
        "name": "H3N2",
        "seqNbr": 2
      },
      {
        "name": "B/Victoria",
        "seqNbr": 3
      },
      {
        "name": "B/Yamagata",
        "seqNbr": 4
      }
    ],
    "reportDateFormat": "[D1]-[MNn,*-3]-[Y01]",
    "isLocal": false
  },
  "opsTrakkerWebApi": {
    "baseURL": "https://opstrakkerdevit.eisinc.com:8893/OpsTrakkerWebAPI/",
    "workflowSearchUri": "graphql",
    "workflowDetailUri": "v1/workflow-details",
    "workflowAttachmentsUri": "v1/attachments",
    "plantListItemsUri": "v1/plant-list-items/",
    "plantId": "1000",
    "itemType": "UserADTest",
    "auth": {
      "username": "OQ231user",
      "password": "oq1234!"
    },
    "headerDateFormatValue": "MM/dd/yyyy",
    "headerTimestampFormatValue": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
    "headerTimezoneValue": "UTC",
    "MethodPost": "POST",
    "MethodGet": "GET",
    "signature": {
      "loggedOnUserId": "otapiuser",
      "loggedOnUserName": "API User",
      "firstUserId": "op1",
      "firstUserName": "Operator User #1",
      "firstSignatureDate": "09/17/2019 01:00:00",
      "secondUserId": "rev1",
      "secondUserName": "Reviewer User #2",
      "secondSignatureDate": "",
      "signatureComment": "This is comment from the Opstrakker LRP Hook Integration",
      "signatureReason": "The following signature is to verify that the action has been performed."
    },
    "workflowStatusToFetch": [
      "Completed"
    ]
  },
  "workflowItemKeys": [
    "isRepeatable",
    "itemTitle",
    "isAutoStart",
    "itemText"
  ],
  "workflowItemParameterKeys": [
    "parameterValue",
    "parameterLabel",
    "parameterValidValues",
    "parameterInvalidValues",
    "listItemType",
    "parameterUpperLimit",
    "parameterLowerLimit"
  ],
  "signType": "1",
  "constants": {
    "ProductFlublok": "Flublok",
    "ProductOQSample": "OQSample",
    "ReportMiniLRP": "MiniLRP",
    "ReportTypeConsolidated": "FinalLRP",
    "OQSample_Material_Receiving": "Material_Receiving",
    "OQSample_Batch_Inspection": "Batch_Inspection",
    "ParamBatchID": "BatchID",
    "ParamCampaign": "Campaign",
    "RootNode": "rootNode",
    "ElementField": "elementNode",
    "ListType": "list",
    "RepeatType": "repeat",
    "ElementType": "element",
    "RefElementType": "refElement",
    "DefaultValueField": "DefaultValue",
    "WorkflowField": "Workflow",
    "ParameterField": "Parameter",
    "FormParameterField": "FormParameter",
    "StepParameterField": "StepParameter",
    "RepeatField": "Repeat",
    "ListField": "List",
    "ListElementField": "ListElement",
    "TransformTypeStandard": "Standard",
    "TransformTypeCustom": "Custom",
    "TransformModeParent": "WithParent",
    "ValueMerge": "Merge",
    "MinRequiredParameters": "Min required parameters are 'workflowId' and 'formId' and 'productId'.",
    "paramProductId": "productId",
    "paramWorkflowId": "workflowId",
    "paramFormId": "formId",
    "paramReportRunBy": "reportRunBy",
    "paramReportRunDate": "reportRunDate",
    "paramReportType": "reportRunType",
    "paramBaseUrl": "reportBseUrl",
    "paramUserId": "userId",
    "paramPassword": "password",
    "paramPlantId": "plantId",
    "paramReportDurationInDays": "reportDurationInDays",
    "headerDateFormatName": "dateFormat",
    "headerTimestampFormatName": "timestampFormat",
    "headerTimezoneName": "timezone",
    "headerContentTypeName": "Content-Type",
    "headerContentTypeValue": "application/json,charset:UTF-8",
    "headerAuthorizationName": "Authorization"
  }
}