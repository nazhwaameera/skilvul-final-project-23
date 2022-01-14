const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = new mongoose.Schema(
  {
    id_peserta: { type: Schema.Types.ObjectId, ref: "Peserta" },
    quests: [{ type: Schema.Types.ObjectId, ref: "Quest" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Map", mapSchema);