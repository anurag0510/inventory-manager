const { HttpStatusError } = require("common-errors");

const log = require("../../config/logger");
const userDal = require("../dal/userDal");

class UserService {
  async getUsers() {
    let result = await userDal.getUsers();
    log.info(JSON.stringify(result));
    for (let index = 0; index < result.length; index++) {
      const element = result[index];
      if ("_id" in element) {
        result[index]["id"] = result[index]["_id"];
        delete result[index]["_id"];
        delete result[index]["__v"];
      }
    }
    return result;
  }

  async createUser(userDetails) {
    let result = await (await userDal.createUser(userDetails)).toObject();
    result["id"] = result["_id"];
    delete result["_id"];
    delete result["__v"];
    log.info(result);
    return result;
  }
}

module.exports = new UserService();
