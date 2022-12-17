const express = require("express");
const userController = require("../../controllers/userController");

const router = express.Router();

router
  /**
   * @api {get} api/user List Users
   * @apiDescription List all users
   * @apiVersion 1.0.0
   * @apiName ListUsers
   * @apiGroup User
   * @apiPermission ADMIN
   *
   * @apiSuccess {Object} Users List of slots.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   */
  .get("/", userController._getUsers);

module.exports = router;
