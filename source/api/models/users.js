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

module.exports = mongoose.model("users", usersSchema);
