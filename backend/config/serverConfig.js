const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const ssr = require("../middleware/ssr");
const getUser = require("../middleware/getUser");
const sessionConfig = require("../config/sessionConfig");
const cors = require("cors");




const serverConfig = (app) => {
  app.use(cors());
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static("public"));
  app.use(ssr);
  app.use(getUser);
};

module.exports = serverConfig;
