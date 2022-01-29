"use strict";

function response(message, isSuccess = true, extraObj = {}) {
  return {
    success: isSuccess,
    message: message,
    ...extraObj,
  };
}

module.exports = response;
