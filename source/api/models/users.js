const mongoose = require("mongoose");

const { roles } = require("../../config/vars");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  number: { type: Number },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  roles: [{ type: String, required: true, enum: roles }],
  is_active: { type: Boolean, default: true },
  is_archieved: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("users", usersSchema);
