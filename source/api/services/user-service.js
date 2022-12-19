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
    try {
      let result = await (await userDal.createUser(userDetails)).toObject();
      return await this.rearrangedReturnData(result);
    } catch (ex) {
      log.warn(ex);
      throw ex;
    }
  }

  async updateUser(key, value, userDetails) {
    let filter = key === "id" ? { _id: value } : { user_name: value };
    let options = { upsert: false, returnOriginal: false };
    try {
      let result = await (
        await userDal.updateUser(userDetails, filter, options)
      ).toObject();
      return await this.rearrangedReturnData(result);
    } catch (ex) {
      log.warn(ex);
      throw ex;
    }
  }

  async rearrangedReturnData(data) {
    data["id"] = data["_id"];
    delete data["_id"];
    delete data["__v"];
    log.info(data);
    return data;
  }
}

module.exports = new UserService();
