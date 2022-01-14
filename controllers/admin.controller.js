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
      //console.log(adminsList);
      res.status(200).send(adminsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getPesertas(req, res) {
    try {
      const pesertasList = await Peserta.find();
      //console.log(pesertasList);
      res.status(200).send(pesertasList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getMentors(req, res) {
    try {
      const mentorsList = await Mentor.find();
      //console.log(mentorsList);
      res.status(200).send(mentorsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async createPeserta(req, res, next) {
    const { nama, email, password, kelas, asal_sekolah, mentor_id } = req.body;
    const peserta = await Peserta.findOne({ email });
    if (peserta)
      return res.status(403).json({
        error: {
          message: "email already in use!",
        },
      });

    const newPeserta = new Peserta({ nama, email, password, kelas, asal_sekolah, mentor_id });
    try {
      await newPeserta.save(async(err, peserta) => {
        //console.log("ini data peserta", peserta._id)
        await Mentor.findOneAndUpdate({ _id: req.body.mentor_id }, { $addToSet: { peserta_asuh: peserta._id } }, { new: true });
      });
      res.status(200).send(newPeserta);
    } catch (error) {
      error.status = 400;
      next(error);
    }
  }

  static async createMentor(req, res, next) {
    const { nama, email, password, no_telp } = req.body;
    const mentor = await Mentor.findOne({ email });
    if (mentor)
      return res.status(403).json({
        error: {
          message: "email already in use!",
        },
      });

    // gimana cara nambahin ke peserta ke dalam peserta asuh?
    const newMentor = new Mentor({ nama, email, password, no_telp });
    try {
      await newMentor.save();
      res.status(200).send(newMentor);
    } catch (error) {
      error.status = 400;
      next(error);
    }
  }

  static async createAdmin(req, res, next) {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (admin)
      return res.status(403).json({
        error: {
          message: "email already in use!",
        },
      });
        
    const newAdmin = new Admin({ email, password });
    try {
      await newAdmin.save();
       const token = getSignedToken(newAdmin);
       res.status(200).json({
        token,
       });
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
            message: "invalid email/password, not admin",
          },
        });
      const isValid = await admin.isPasswordValid(password);
      if (!isValid)
        return res.status(403).json({
          error: { message: "invalid email/password, password not valid" },
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
