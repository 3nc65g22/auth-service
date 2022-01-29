"use strict";

const { verifyToken } = require("@utils/jwt");
const { jsonResponse } = require("@utils");

module.exports = (req, res, next) => {
  let token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.headers.authorization;

  if (token) {
    verifyToken(token, function (err, decoded) {
      if (err) {
        return res.status(401).json(jsonResponse(err.message, false));
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(400).json(jsonResponse("Authentication failed.", false));
  }
};
