const router = require("express").Router();
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const login = require("../../components/LoginPage");

router.get("/login", (req, res) => {
  const MainPage = React.createElement(login, {
    title: "Login",
    user: req.session.user_sid,
  });
  const html = ReactDOMServer.renderToStaticMarkup(MainPage);
  res.send(`<!DOCTYPE html> ${html}`);
});

module.exports = router;
