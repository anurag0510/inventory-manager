const { HttpStatusError } = require("common-errors");

const Users = require("../models/users");

class UserDal {
  async getUsers() {
    const result = await Users.find({}, "").lean();
    return result;
  }

  async createUser(userInfo) {
    let user = new Users({
      user_name: userInfo.user_name,
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      roles: userInfo.roles,
      is_active: true,
      is_archieved: false,
    });
    const result = await Users.create(user);
    return result;
  }
}

module.exports = new UserDal();
