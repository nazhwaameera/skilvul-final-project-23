const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const pesertaSchema = new Schema(
  {
    nama: {
        type: String,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      validate: [emailValidator, "incorrect mail format"],
    },
    password: {
      type: String,
      required: true,
    },
    kelas: {
        type: String,
    },
    asal_sekolah: {
        type: String,
    },
    level: {
        type: Number,
        default: 1
    },
    exp: {
        type: Number,
        default: 0
    },
    mentor_id: { type: Schema.Types.ObjectId, ref: "Mentor" },
    quests: [{ type: Schema.Types.ObjectId, ref: "Quest" }],
    achievements: [{ type: Schema.Types.ObjectId, ref: "Achievement" }],
    todos: [{ type: Schema.Types.ObjectId, ref: "Todo" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

function emailValidator(value) {
  return /^.+@.+\..+$/.test(value);
}

pesertaSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.password, salt);
    this.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});

pesertaSchema.methods.isPasswordValid = async function (value) {
  try {
    return await bcrypt.compare(value, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = mongoose.model("Peserta", pesertaSchema);
