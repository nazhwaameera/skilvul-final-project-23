const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new mongoose.Schema(
  {
    // id_peserta: [{ type: Schema.Types.ObjectId, ref: "Peserta" }],
    id_quest: { type: Schema.Types.ObjectId, ref: "Quest" },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("File", fileSchema);
