const express = require("express");

const routesV1 = require("./v1/routes");

const router = express.Router();

/**
 * API Routes
 */
router.use(routesV1);

module.exports = router;
