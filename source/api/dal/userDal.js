const { HttpStatusError } = require("common-errors");

const Users = require("../models/users");

class UserDal {
  async getUsers() {
    const result = await Users.find({}, "").lean();
    return result;
  }

  async createUser(userInfo) {
    let result = Users.createUser(userInfo);
    return result;
  }
}

module.exports = new UserDal();
