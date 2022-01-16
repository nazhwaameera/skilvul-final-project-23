const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const achievementSchema = new mongoose.Schema(
  {
    id_peserta: [{ type: Schema.Types.ObjectId, ref: "Peserta" }],
    id_mentor: [{ type: Schema.Types.ObjectId, ref: "Mentor" }],
    tanggal_diberikan: {
        type: Date,
    },
    id_maps: [{ type: Schema.Types.ObjectId, ref: "Maps"}],
    files: [{ type: Schema.Types.ObjectId, ref: "File"}],
    title: {
        type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AchievementModel = mongoose.model("Achievement", achievementSchema);
module.exports = AchievementModel;
