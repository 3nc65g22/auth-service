"use strict";

const fs = require("fs");
const jwt = require("jsonwebtoken");

let tokenSignOptions = {
  // issuer: config.issuer,
  // audience: config.audience,
};

// let refrestTokenSignOptions = {
//   ...tokenSignOptions,
//   expiresIn: config.refreshTokenLife,
// };

const tokenLife = process.env.TOKEN_LIFE;

tokenSignOptions.expiresIn = tokenLife;
tokenSignOptions.algorithm = "RS256";

const privateKey = process.env.PRIVATE_KEY
  ? process.env.PRIVATE_KEY.replace(/\\n/g, "\n")
  : fs.readFileSync("../keys/private.key", "utf8");

const publicKey = process.env.PUBLIC_KEY
  ? process.env.PUBLIC_KEY.replace(/\\n/g, "\n")
  : fs.readFileSync("../keys/public.key", "utf8");

const generateToken = (data, isDummy) => {
  return {
    token: jwt.sign(data, isDummy ? pk : privateKey, tokenSignOptions),
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
