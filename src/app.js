"use strict";

const express = require("express");
require("express-group-routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const apiRoutes = require("./routes.api");

express.application.prefix = express.Router.prefix = function (
  path,
  configure
) {
  var router = express.Router();
  this.use(path, router);
  configure(router);
  return router;
};

const app = express();

app
  .use(express.json({ strict: false }))
  .use(cookieParser())
  .use(
    cors({
      optionsSuccessStatus: 200,
    })
  );

//Api Routes
app.group("/api", apiRoutes);

module.exports = app;
