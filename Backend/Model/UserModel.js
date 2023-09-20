const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  phone: { type: Number, require: true },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
