const { port, env } = require("./config/vars");

const app = require("./config/express");
const mongoose = require("./config/mongoConnection");
const log = require("../source/config/logger");

mongoose.connect();

app.listen(port, () => log.info(`server started on port ${port} (${env})`));

module.exports = app;
