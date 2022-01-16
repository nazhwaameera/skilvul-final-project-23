const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Upload = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Upload", Upload);
