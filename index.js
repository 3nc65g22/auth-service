"use strict";

const env = process.env.NODE_ENV;
const envFile = env ? `.env.${env}` : ".env";

require("dotenv").config({ path: `${envFile}` });
require("module-alias/register");

const app = require("./src/app");
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Running in ${process.env.NODE_ENV.toUpperCase()} environment`);
  console.log(`Listening on port ${port}`);
});
