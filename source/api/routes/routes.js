const express = require("express");

const routesV1 = require("./v1/routes");

const router = express.Router();

/**
 * API Routes
 */
router.use(routesV1);
router.use("*", (request, response) => {
  response
    .status(404)
    .json({ message: `No such route '${request.url}' to respond.` });
});

module.exports = router;
