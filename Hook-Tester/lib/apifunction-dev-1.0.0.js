/* default connection timeout */
var CONNECT_TIMEOUT = 5000;
/* webhook http service class */
var WebhookServiceClass = null;
var UTC_DATE_FORMAT = "YYYY-MM-DD";
var UTC_TIME_FORMAT = "HH:mm:ss";
var UTF_CHARSET = "UTF-8";

/**  
 * httpGet() returns response from api call   
 * based on the passed-in url and headers     
 *   
 * @param <String> theUrl: URL of get api 
 * @param <JSON> headers: JSON data for headers with key value pair  
 * @param <Boolean> enableCertCheck: Enable certificate check for https calls
 * @return <String> Stringified JSON response from api
 */
function httpGet(theUrl, headers, enableCertCheck) {
  try {
    // replace space with %20 encoded string
    theUrl = encodeUri(theUrl);
    headers = (headers == undefined || headers == null) ? {} : headers;
    var response = makeHTTPCall(theUrl, "GET", JSON.stringify(headers));
    
    return response; //asResponse(con);
  } catch (ex) {
    // throw error
    logger.error('error: ' + ex.message);
    throw new Error(ex.message);
  }
}


/**  
 * httpPost() returns response from post api call   
 * based on the passed-in url and headers     
 *   
 * @param <String> theUrl: URL of get api 
 * @param <JSON> data: JSON data for body to send to api 
 * @param <JSON> headers: JSON data for headers with key value pair  
 * @param <Boolean> enableCertCheck: Enable certificate check for https calls
 * @return <String> Stringified JSON response from api
 */
function httpPost(theUrl, data, headers, enableCertCheck) {
  try {
    // replace space with %20 encoded string
    theUrl = encodeUri(theUrl);
    /* check if provided data is string or object */
    if (typeof (data) !== 'string') {
      data = JSON.stringify(data);
    }
    headers = (headers == undefined || headers == null) ? {} : headers;
    var response = makeHTTPCall(theUrl, "POST", JSON.stringify(headers), data);
    
    return response;
  } catch (ex) {
    logger.error('error: ' + ex.message);
    throw new Error(ex.message);
  }
}

/**  
 * httpPut() returns response from post api call   
 * based on the passed-in url and headers     
 *   
 * @param <String> theUrl: URL of get api 
 * @param <JSON> data: JSON data for body to send to api 
 * @param <JSON> headers: JSON data for headers with key value pair  
 * @param <Boolean> enableCertCheck: Enable certificate check for https calls
 * @return <String> Stringified JSON response from api
 */
function httpPut(theUrl, data, headers, enableCertCheck) {
  try {
    // replace space with %20 encoded string
    theUrl = encodeUri(theUrl);
    /* check if provided data is string or object */
    if (typeof (data) !== 'string') {
      data = JSON.stringify(data);
    }
    headers = (headers == undefined || headers == null) ? {} : headers;
    var response = makeHTTPCall(theUrl, "PUT", JSON.stringify(headers), data);
    
    return response;
  } catch (ex) {
    logger.error('error: ' + ex.message);
    throw new Error(ex.message);
  }
}

/**  
 * httpPatch() returns response from patch api call   
 * based on the passed-in url and headers     
 *   
 * @param <String> theUrl: URL of get api 
 * @param <JSON> data: JSON data for body to send to api 
 * @param <JSON> headers: JSON data for headers with key value pair  
 * @param <Boolean> enableCertCheck: Enable certificate check for https calls
 * @return <String> Stringified JSON response from api
 */
function httpPatch(theUrl, data, headers, enableCertCheck) {
  try {
    // replace space with %20 encoded string
    theUrl = encodeUri(theUrl);
    /* check if provided data is string or object */
    if (typeof (data) !== 'string') {
      data = JSON.stringify(data);
    }
    headers = (headers == undefined || headers == null) ? {} : headers;
    var response = makeHTTPCall(theUrl, "PATCH", JSON.stringify(headers), data);
    
    return response;
  } catch (ex) {
    logger.error('error: ' + ex.message);
    throw new Error(ex.message);
  }
}

function makeHTTPCall(theUrl, httpMethod, headers, data) {
  try{
    let xhr = new XMLHttpRequest();
    xhr.open(httpMethod, theUrl, false);
    xhr.setRequestHeader("Accept", "*");
    //xhr.timeout = CONNECT_TIMEOUT;
    //xhr.ontimeout = function() { console.error("API call Timed out!!!"); };
    headers = JSON.parse(headers);
    Object.keys(headers).forEach(function(key) {
      logger.info('Key : ' + key + ', Value : ' + headers[key])
      xhr.setRequestHeader(key, headers[key]);
    })
  
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState === 4) {
    //     console.log("Status: " + xhr.status);
    //     console.log("Response: " + xhr.responseText);
    //     return xhr.responseText;
    //   }
    // };
    if (httpMethod == "GET") {
      xhr.send();
    } else {
      xhr.send(data);
    }
    
    let response = {};
    response["statusCode"] = xhr.status;
    response["data"] = xhr.responseText;
    return JSON.stringify(response);
    // return response && response != null ? JSON.parse(response) : response;
  } catch (ex) {
    logger.error('error: ' + ex.message);
    throw new Error(ex.message);
  }
}

/**
 * Encodes url
 * @param {string} uri 
 * @returns 
 */
function encodeUri(uri) {
  if (uri == undefined || uri == null)
    return uri;
  let decodedURI = decodeURI(uri);
  return encodeURI(decodedURI);
}

function getDateBasedOnTimeSelectSetting(dateVal, fromFormat, timeSelectSettingType) {
  var getMomentDate;
  if (dateVal && timeSelectSettingType) {
    if (timeSelectSettingType == 'CURR') {
      getMomentDate = moment(dateVal, fromFormat).format(UTC_DATE_FORMAT + " " + UTC_TIME_FORMAT);
    }
    else if (timeSelectSettingType == 'FREE') {
      getMomentDate = moment(dateVal, fromFormat).format(UTC_DATE_FORMAT + " " + UTC_TIME_FORMAT);
    }
    else if (timeSelectSettingType == 'BOD') {
      getMomentDate = moment(dateVal, fromFormat).format(UTC_DATE_FORMAT + " 00:00:00");
    }
    else if (timeSelectSettingType == 'EOD') {
      getMomentDate = moment(dateVal, fromFormat).format(UTC_DATE_FORMAT + " 23:59:59");
    }
    else {
      getMomentDate = null;
    }
  }
  else {
    getMomentDate = null;
  }
  return getMomentDate;
}

function getDateObject(dateVal, fromFormat) {
  var getMomentDate;
  if (dateVal && fromFormat) {
    var dateChars = [':m', 'm:', ':s', 's:', ':M', 'M:', ':S', 'S:'];
    var newDateFormat = "";
    for (let chars of fromFormat) {
      if (dateChars.includes(chars)) {
        newDateFormat += chars.toLowerCase();
      } else {
        newDateFormat += chars;
      }
    }
    getMomentDate = moment(moment(dateVal, fromFormat).toDate()).format(UTC_DATE_FORMAT + " " + UTC_TIME_FORMAT);
    return getMomentDate;
  }
  else {
    getMomentDate = null;
  }
}

function getDateObjectByTimezone(dateVal, fromFormat, toFormat, timezone, inUTC) {
  var getMomentDate;
  if (dateVal && fromFormat) {
    if (timezone && timezone.length > 0) {
      if (inUTC) {
        getMomentDate = moment.utc(moment.tz(dateVal, fromFormat, timezone)).format(toFormat);
      } else {
        getMomentDate = moment.tz(dateVal, fromFormat, timezone).format(toFormat);
      }
    } else {
      getMomentDate = moment(dateVal, fromFormat).format(toFormat);
    }


    return getMomentDate;
  }
  else {
    getMomentDate = null;
  }
}

function getJSONAttributeValue(xpath) {
  return true;
}

function getJSONCollection(xpath) {
  return true;
}

function setJSONAttributeValue(xpath, value) {
  return true;
}

