"use strict";

function jsonResponse(message, isSuccess = true, extraObj = {}) {
  return {
    success: isSuccess,
    message: message,
    ...extraObj,
  };
}

module.exports = jsonResponse;
