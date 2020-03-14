const express = require("express");
const routes = express.Router();

const ServerRunning = require('./ServerRunning')

routes.get(
  "/server/running",
  ServerRunning.check
);

module.exports = routes;
