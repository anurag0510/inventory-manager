const { HttpStatusError } = require("common-errors");

const Users = require("../models/users");

class UserDal {
  async getUsers() {
    const result = await Users.find({}, "");
    return result;
  }
}

module.exports = new UserDal();
