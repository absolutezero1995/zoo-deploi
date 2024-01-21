const router = require("express").Router();
const main = require("../../components/MainPage");

router.get("/", (req, res) => {
  res.send(res.renderComponent(main, { title: "Main Page" }));
});

module.exports = router;
