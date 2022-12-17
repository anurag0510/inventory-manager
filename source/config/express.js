const express = require("express");
const bodyParser = require("body-parser");

const routes = require("../api/routes/routes");

const app = express();

app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

module.exports = app;
