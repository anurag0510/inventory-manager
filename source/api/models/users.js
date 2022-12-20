const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  user_name: { type: String, unique: true, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  roles: [{ type: String, required: true }],
  is_active: { type: Boolean, default: true },
  is_archieved: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

/*
 * Pre-middleware
 */
usersSchema.pre(["find", "findOneAndUpdate"], function () {
  this.select(Object.keys(usersSchema.tree));
});

/*
 * Statics
 */
usersSchema.statics = {
  async createUser(userInfo) {
    const result = await this.create({
      user_name: userInfo.user_name,
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      roles: userInfo.roles,
      is_active: true,
      is_archieved: false,
    });
    return result;
  },

  async updateUser(userInfo, filter, options) {
    let updateData = () => {
      let data = {};
      if (userInfo.hasOwnProperty("first_name"))
        data["first_name"] = userInfo["first_name"];
      if (userInfo.hasOwnProperty("last_name"))
        data["last_name"] = userInfo["last_name"];
      if (userInfo.hasOwnProperty("roles")) data["roles"] = userInfo["roles"];
      data["updated_at"] = Date.now();
      return data;
    };
    const result = await this.findOneAndUpdate(
      filter,
      { $set: updateData() },
      options
    );
    return result;
  },

  async deleteUser(filter, options) {
    let updateData = () => {
      let data = {};
      data["is_active"] = false;
      data["updated_at"] = Date.now();
      return data;
    };
    const result = await this.findOneAndUpdate(
      filter,
      { $set: updateData() },
      options
    );
    return result;
  },
};

module.exports = mongoose.model("users", usersSchema);
