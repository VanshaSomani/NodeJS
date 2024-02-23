const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
  role:{
    type: Schema.Types.ObjectId,
    ref: "Role"
  },
  permissions: [
    {
    type: Schema.Types.ObjectId,
    ref: "Permission"
    }
  ],
  password: {
    type: String,
  }
});
module.exports = mongoose.model("User", userSchema);