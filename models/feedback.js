const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new mongoose.Schema(
  {
    id_peserta: [{ type: Schema.Types.ObjectId, ref: "Peserta" }],
    id_mentor: [{ type: Schema.Types.ObjectId, ref: "Mentor" }],
    id_quest: [{ type: Schema.Types.ObjectId, ref: "Quest" }],
    //Import konten quest, perlu akses dari sini apa bisa diquery langsung?
    //konten_quest: [{ type: Schema.Types.String, ref: "Quest" }],
    tanggal: {
        type: Date,
        default: Date.now,
    },
    konten: {
        type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
