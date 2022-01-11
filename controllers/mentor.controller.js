const dotenv = require("dotenv");
dotenv.config();

const key = process.env.SECRET_KEY;

const jwt = require("jsonwebtoken");

const Admin = require("../models/admin");
const Peserta = require("../models/peserta");
const Mentor = require("../models/mentor");
const Quest = require("../models/quest");
const Feedback = require("../models/feedback");

class MentorController {
  static async getMentors(req, res) {
    try {
      const mentorsList = await Mentor.find();
      console.log(mentorsList)
      res.status(200).send(mentorsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }


  static async loginMentor(req, res) {
    try {
      const { email, password } = req.body;
      const mentor = await Mentor.findOne({ email });
      if (!mentor)
        return res.status(403).json({
          error: {
            message: "invalid email/password",
          },
        });
      const isValid = await mentor.isPasswordValid(password);
      if (!isValid)
        return res.status(403).json({
          error: { message: "invalid email/password" },
        });
      const token = getSignedToken(mentor);
      res.status(200).json({
        token,
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async showPeserta(req, res) {
    try {
        const body = req.body;
        // mengambil data peserta asuh dari id mentor
        const peserta_asuh = await Mentor.findOne({_id: body._id}).populate("peserta_asuh");
        // mengambil data peserta asuh berdasarkan id peserta, bagaimana cara membaca datanya?
        const pesertasList = await Peserta.find();
        console.log(pesertasList)
        res.status(200).send(pesertasList);
      } catch (error) {
        res.status(500).send({ err: error });
      }
  }

  // Menampilkan detail penyelesaian dari quest yang dipilih
  static async detailPenyelesaian(req, res) {
    try {
        const id_quest = req.params.id_quest;
        const detailPenyelesaian = await Quest.find({ _id: id_quest});
        res.status(200).send(detailPenyelesaian);
    } catch (error){
        res.status(500).send({ err: error.message });
    }
  }

  static async createFeedback(req, res) {
    try {
        const body = req.body;
        const konten = body.konten;
  
        const feedback = new Feedback({
          konten: konten,
        });
  
        const saved = await feedback.save();
        res.status(201).send(saved);
      } catch (error) {
        res.status(500).send({ err: error });
        console.log(error)
      }
  }

  static async createQuest(req, res) {
    try {
        const body = req.body;
        const konten = body.konten;
  
        const quest = new Quest({
          konten: konten,
        });
  
        const saved = await quest.save();
        res.status(201).send(saved);
      } catch (error) {
        res.status(500).send({ err: error });
        console.log(error)
      }
  }
}



getSignedToken = (mentor) => {
  return jwt.sign(
    {
      id: mentor._id,
      email: mentor.email,
    },
    key,
    { expiresIn: "1h" }
  );
};

module.exports = MentorController;
