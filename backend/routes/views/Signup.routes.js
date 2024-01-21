const router = require("express").Router();
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const signup = require("../../components/SignupPage");

router.get("/signup", (req, res) => {
  const MainPage = React.createElement(signup, {
    title: "Signup Page",
    user: req.session.user_sid,
  });
  const html = ReactDOMServer.renderToStaticMarkup(MainPage);
  res.send(`<!DOCTYPE html> ${html}`);
});

module.exports = router;
