"use strict";

const fs = require("fs");
const jwt = require("jsonwebtoken");
const config = require("@root/config");

let tokenSignOptions = {
  // issuer: config.issuer,
  // audience: config.audience,
};

let refrestTokenSignOptions = {
  ...tokenSignOptions,
  expiresIn: config.refreshTokenLife,
};

tokenSignOptions.expiresIn = config.tokenLife;
tokenSignOptions.algorithm = "RS256";

const privateKey = process.env.PRIVATE_KEY
  ? process.env.PRIVATE_KEY.replace(/\\n/g, "\n")
  : fs.readFileSync("../keys/private.key", "utf8");

const publicKey = process.env.PUBLIC_KEY
  ? process.env.PRIVATPUBLIC_KEYE_KEY.replace(/\\n/g, "\n")
  : fs.readFileSync("../keys/public.key", "utf8");

const generateToken = (data, isDummy) => {
  return {
    token: jwt.sign(data, isDummy ? pk : privateKey, tokenSignOptions),
    refreshToken: jwt.sign(
      data,
      config.refreshTokenSecret,
      refrestTokenSignOptions
    ),
  };
};

const verifyToken = (token, callback, isDummy) => {
  // jwt.verify(token, isDummy ? ppk : publicKEY, tokenSignOptions, callback);
  jwt.verify(token, publicKey, tokenSignOptions, callback);
};

module.exports = {
  verifyToken,
  generateToken,
};
