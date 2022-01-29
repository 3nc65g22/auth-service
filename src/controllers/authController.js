"use strict";

const bcrypt = require("bcryptjs");
const Validator = require("validatorjs");

const { generateToken } = require("@utils/jwt");
const { response } = require("@utils");

const { user } = require("@models");

let login = async ({ body }, res) => {
  const validation = new Validator(body, {
    username: "required",
    password: "required",
  });

  if (validation.fails()) {
    return res
      .status(400)
      .json(response("Validation errors", false, validation.errors));
  }

  try {
    let record = await user.findOne({
      attributes: ["id", "first_name", "last_name", "username", "password"],
      where: {
        username: body.username,
      },
    });

    if (record) {
      if (!bcrypt.compareSync(body.password, record.password || "")) {
        return res.status(400).json(response(`Invalid credentials`, false));
      }

      let userData = { ...record };
      delete userData.password;

      const token = generateToken(userData).token;

      return res.json(response(``, true, { accessToken: token }));
    }
  } catch (error) {
    console.log(error);
    return res.json(response(`Error`, false));
  }
};

module.exports = {
  login,
};
