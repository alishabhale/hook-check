var LOGGER_LEVEL = "DEBUG";

var logger = {
  info: function(message) {
    LOGGER_LEVEL == "INFO" ? console.info(message) : "";
  },
  debug: function(message) {
    (LOGGER_LEVEL == "INFO" || LOGGER_LEVEL == "DEBUG") ? console.debug(message) : "";
  },
  error: function(message) {
    (LOGGER_LEVEL == "INFO" || LOGGER_LEVEL == "DEBUG" || LOGGER_LEVEL == "ERROR") ? console.error(message) : "";
  }
};