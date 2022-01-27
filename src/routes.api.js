const tokenChecker = require("@middlewares/tokenChecker");
const { response } = require("@utils");

module.exports = (route) => {
  // route.use(tokenChecker);
  route.get("/some-endpoint", tokenChecker, ({ decoded: user }, res) => {
    return res.json(response("verified", true, { user }));
  });
};
