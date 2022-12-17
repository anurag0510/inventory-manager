const express = require("express");

const userRoutes = require("./user-router");

const router = express.Router();

router.use("/api/v1/user", userRoutes);

module.exports = router;
