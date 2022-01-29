const tokenChecker = require("@middlewares/tokenChecker");
const { jsonResponse } = require("@utils");
const { authController } = require("@controllers");

module.exports = (route) => {
  // route.use(tokenChecker);

  route.get("/login", authController.login);

  route.get("/some-endpoint", tokenChecker, ({ decoded: user }, res) => {
    return res.json(jsonResponse("verified", true, { user }));
  });
};
