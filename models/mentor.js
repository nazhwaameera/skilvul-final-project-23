const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const mentorSchema = new Schema(
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
    no_telp: {
        type: String,
    },
    peserta_asuh: [{ type: Schema.Types.ObjectId, ref: "Peserta" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

function emailValidator(value) {
  return /^.+@.+\..+$/.test(value);
}

mentorSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.password, salt);
    this.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});

mentorSchema.methods.isPasswordValid = async function (value) {
  try {
    return await bcrypt.compare(value, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = mongoose.model("Mentor", mentorSchema);
