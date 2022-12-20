const Users = require("../models/users");

class UserDal {
  async getUsers() {
    const result = await Users.find({}, "").lean();
    return result;
  }

  async createUser(userInfo) {
    let result = await Users.createUser(userInfo);
    return result;
  }

  async updateUser(userInfo, filter, options) {
    let result = await Users.updateUser(userInfo, filter, options);
    if (result == null) {
      throw new Error("filter failed to match the criteria");
    }
    return result;
  }

  async deleteUser(filter, options) {
    let result = await Users.deleteUser(filter, options);
    if (result == null) {
      throw new Error("filter failed to match the criteria");
    }
    return result;
  }
}

module.exports = new UserDal();
