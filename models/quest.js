const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questSchema = new mongoose.Schema(
  {
    id_peserta: [{ type: Schema.Types.ObjectId, ref: "Peserta" }],
    id_mentor: [{ type: Schema.Types.ObjectId, ref: "Mentor" }],
    id_maps: [{ type: Schema.Types.ObjectId, ref: "Maps" }],
    tanggal_diberikan: {
        type: Date,
    },
    tanggal_diselesaikan: {
        type: Date,
    },
    konten: {
        type: String,
    },
    status: {
        type: String,
    },
    files: [{ type: Schema.Types.ObjectId, ref: "File" }],
    feedback: [{ type: Schema.Types.ObjectId, ref: "Feedback" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const QuestModel = mongoose.model("Quest", questSchema);
module.exports = QuestModel;
