const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new mongoose.Schema(
  {
    id_peserta: { type: Schema.Types.ObjectId, ref: "Peserta" },
    konten: {
        type: String,
    },
    status: {
      type: String, 
      enum: ["Unfinished", "Finished"],
      default: "Unfinished"
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TodoModel = mongoose.model("Todo", todoSchema);
module.exports = TodoModel;
