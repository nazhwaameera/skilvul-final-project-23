const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questSchema = new mongoose.Schema(
  {
    id_peserta: { type: Schema.Types.ObjectId, ref: "Peserta" },
    id_mentor: { type: Schema.Types.ObjectId, ref: "Mentor" },
    id_maps: { type: Schema.Types.ObjectId, ref: "Maps" },
    tanggal_diberikan: {
        type: Date,
        default: Date.now,
    },
    tanggal_diselesaikan: {
        type: Date,
    },
    konten: {
        type: String,
    },
    status: {
        type: String,
        enum: ["Unfinished", "Finished"],
        default: "Unfinished"
    },
    files: [{ type: Schema.Types.ObjectId, ref: "File" }],
    feedback: { type: Schema.Types.ObjectId, ref: "Feedback" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Quest", questSchema);
