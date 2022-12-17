const mongoose = require("mongoose");

const log = require("../../config/logger");
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
}

module.exports = new UserController();
