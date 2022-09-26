function getData() {
  let OSIPIURL = config.OSIPI.OSIPIURL;
  let OSIPIAuthToken = config.OSIPI.OSIPIAuthToken;
  let path = "/piwebapi/attributes?path=\\\\PALLAS\\23456.Temperature";
  let headers = {
    "Authorization": "Basic " + OSIPIAuthToken
  };
  var response = httpGet(OSIPIURL + path, headers, false);
  response = response && response != null ? JSON.parse(response) : response
  logger.debug("WebId: " + JSON.parse(response.data).WebId);
}

function postData() {
  let OSIPIURL = config.OSIPI.OSIPIURL;
  let OSIPIAuthToken = config.OSIPI.OSIPIAuthToken;
  let path = "/piwebapi/streams/F1DP_t_ACQLfCE-Zco-o3RuPqABAAAAAUEFMTEFTXDIzNDU2LlRFTVBFUkFUVVJF/value";
  let headers = {
    "Authorization": "Basic " + OSIPIAuthToken,
    "Content-Type": "application/json",
    "X-Requested-With": "message/http"
  };

  let data = {
    "Timestamp": "*",
    "Value": 111.3
  };

  var response = httpPost(OSIPIURL + path, data, headers, false);
  response = response && response != null ? JSON.parse(response) : response
  logger.debug("Status " + response.statusCode);
}

function getDateByTimezone() {
  let dt = getDateObjectByTimezone("09/19/2022 11:50:55", "MM/DD/YYYY HH:mm:ss", "DD-MMM-YYYY HH:mm:ss", "Asia/Kolkata", true);
  console.log("09/19/2022 11:50:55 -> " + dt);
}