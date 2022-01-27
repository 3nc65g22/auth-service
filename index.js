"use strict";

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env";

require("dotenv").config({ path: `${envFile}` });
require("module-alias/register");

const app = require("./src/app");

app.listen(process.env.PORT, () => {
  console.log(`Running in ${process.env.NODE_ENV.toUpperCase()} environment`);
  console.log(`Listening on port ${process.env.PORT}`);
});
