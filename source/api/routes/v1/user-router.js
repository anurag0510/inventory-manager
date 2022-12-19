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
  .get("/", (request, response) => {
    userController._getUsers(request, response);
  });

router
  /**
   * @api {post} api/user Create User
   * @apiDescription Create user and return created user object to client
   * @apiVersion 1.0.0
   * @apiName Create User
   * @apiGroup User
   * @apiPermission ADMIN
   *
   * @apiSuccess {Object} Created User Object to return
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   */
  .post("/", (request, response) => {
    userController._createUser(request, response);
  });

router
  /**
   * @api {post} api/user Create User
   * @apiDescription Update user and return updated user object to client
   * @apiVersion 1.0.0
   * @apiName Update User
   * @apiGroup User
   * @apiPermission ADMIN
   *
   * @apiSuccess {Object} Updated User Object to return
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   */
  .put("/:key(user_name|id)/:value", (request, response) => {
    userController._updateUser(request, response);
  });

module.exports = router;
