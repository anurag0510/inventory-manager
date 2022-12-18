const mongoose = require("mongoose");

const log = require("../../config/logger");
const UserValidation = require("../validations/user-validation");
const UserService = require("../services/user-service");

class UserController {
  async _getUsers(request, response) {
    try {
      const result = await UserService.getUsers();
      log.info(JSON.stringify(result));
      response.json({ success: true, data: result });
    } catch (ex) {
      log.warn(ex);
      response.status(500).json({ message: "Internal Server Error" });
    }
  }

  async _createUser(request, response) {
    let payload = request.body;
    try {
      const payloadValidation = await UserValidation.validateCreateUserData(
        payload
      );
      if (!payloadValidation.error) {
        const result = await UserService.createUser(payload);
        log.info(JSON.stringify(result));
        response.status(201).json({ success: true, data: result });
      } else {
        response.status(400).json({
          status: 400,
          message: payloadValidation.error.details.map((value) => {
            return value.message;
          }),
        });
      }
    } catch (ex) {
      log.warn(ex);
      response.status(500).json({ message: ex });
    }
  }
}

module.exports = new UserController();
