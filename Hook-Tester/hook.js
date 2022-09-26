function hook() {
  let OSIPIURL = config.OSIPI.OSIPIURL;
  let OSIPIAuthToken = config.OSIPI.OSIPIAuthToken;
  let path = "/piwebapi/attributes?path=\\\\PALLAS\\23456.Temperature";
  let headers = {
    "Authorization": "Basic " + OSIPIAuthToken
  };
  var response = httpGet(OSIPIURL + path, headers, false);
  response = response && response != null ? JSON.parse(response) : response
  logger.debug("WebId: " + JSON.parse(response.data).WebId);
  // logger.info("INFO " + response);
  // logger.debug("DEBUG " + response.data);
  // logger.error("ERROR " + response.statusCode);
}