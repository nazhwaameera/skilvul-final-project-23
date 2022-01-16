const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Upload = new Schema(
  {
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Upload", Upload);
