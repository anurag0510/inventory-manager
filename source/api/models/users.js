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
};

module.exports = mongoose.model("users", usersSchema);
