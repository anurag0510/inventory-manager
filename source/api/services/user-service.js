const { HttpStatusError } = require("common-errors");

const userDal = require("../dal/userDal");

class UserService {
  async getUsers() {
    let result = await userDal.getUsers();
    return result;
  }
}

module.exports = new UserService();
