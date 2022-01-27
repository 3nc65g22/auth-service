module.exports = (route) => {
  route.get("/some-endpoint", ({ decoded: user }, res) => {
    return res.json({});
  });
};
