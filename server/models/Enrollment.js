const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    userEmail: String,
    section: String,
    parentName: String,
    childFullName: String,
    childAge: Number,
    phone: String,
    note: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enrollment", enrollmentSchema);