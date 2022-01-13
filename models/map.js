const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = new mongoose.Schema(
  {
    id_peserta: { type: Schema.Types.ObjectId, ref: "Peserta" },
    id_quest: [{ type: Schema.Types.ObjectId, ref: "Quest" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const MapModel = mongoose.model("Map", mapSchema);
module.exports = MapModel;