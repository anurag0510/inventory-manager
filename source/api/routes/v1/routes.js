const express = require("express");

const userRoutes = require("./user-router");

const router = express.Router();

router.use("/api/v1/user", userRoutes);
router.use("*", (request, response) => {
  response
    .status(404)
    .json({ message: `No such route '${request.url}' to respond.` });
});

module.exports = router;
