const dotenv = require("dotenv");
dotenv.config();

const key = process.env.SECRET_KEY;

const jwt = require("jsonwebtoken");

const Admin = require("../models/admin");
const Peserta = require("../models/peserta");
const Mentor = require("../models/mentor");

class AdminController {
  static async getAdmins(req, res) {
    try {
      const adminsList = await Admin.find();
      console.log(adminsList);
      res.status(200).send(adminsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  // harusnya di mentor controller kah? atau assign manual aja?
  // ambigukah id yang harus diassign ke peserta_asuh?
  static async createPeserta(req, res, next) {
    const { nama, email, password, kelas, asal_sekolah, level, exp, mentor_id } = req.body;
    const peserta = await Peserta.findOne({ email });
    if (peserta)
      return res.status(403).json({
        error: {
          message: "email already in use!",
        },
      });

    const newPeserta = new Peserta({ nama, email, password, kelas, asal_sekolah, level, exp, mentor_id });
    try {
      await newPeserta.save();
      const mentor = await Mentor.countDocuments({ _id: req.body.mentor_id });
      //console.log(maps)

      let result;
      if (mentor) {
        result = await Mentor.findOneAndUpdate({ _id: req.body.mentor_id }, { $addToSet: { peserta_asuh: req.body.peserta_asuh } }, { new: true });
      } else {
        console.log("Mentor id is not exist.");
      }
      //   const token = getSignedToken(newPeserta);
      //   res.status(200).json({
      //     token,
      //   });
    } catch (error) {
      error.status = 400;
      next(error);
    }
  }

  static async createMentor(req, res, next) {
    const { nama, email, password, no_telp, peserta_asuh } = req.body;
    const mentor = await Mentor.findOne({ email });
    if (mentor)
      return res.status(403).json({
        error: {
          message: "email already in use!",
        },
      });

    // gimana cara nambahin ke peserta ke dalam peserta asuh?
    const newMentor = new Mentor({ nama, email, password, no_telp, peserta_asuh });
    try {
      await newMentor.save();
      //   const token = getSignedToken(newMentor);
      //   res.status(200).json({
      //     token,
      //   });
    } catch (error) {
      error.status = 400;
      next(error);
    }
  }

  static async loginAdmin(req, res) {
    try {
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });
      if (!admin)
        return res.status(403).json({
          error: {
            message: "invalid email/password",
          },
        });
      const isValid = await admin.isPasswordValid(password);
      if (!isValid)
        return res.status(403).json({
          error: { message: "invalid email/password" },
        });
      const token = getSignedToken(admin);
      res.status(200).json({
        token,
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

getSignedToken = (admin) => {
  return jwt.sign(
    {
      id: admin._id,
      email: admin.email,
    },
    key,
    { expiresIn: "1h" }
  );
};

module.exports = AdminController;
