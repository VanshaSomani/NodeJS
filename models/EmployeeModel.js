const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      age: {
        type: Number,
      },
      isActive: {
        type: Boolean,
        default: true,
      },
      password: {
        type: String,
      }
});

module.exports = mongoose.model("Employee",employeeSchema)