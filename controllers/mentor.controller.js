const dotenv = require("dotenv");
dotenv.config();

const key = process.env.SECRET_KEY;

const jwt = require("jsonwebtoken");

const Peserta = require("../models/peserta");
const Mentor = require("../models/mentor");
const Quest = require("../models/quest");
const Feedback = require("../models/feedback");
const File = require("../models/file");
const Map = require("../models/map");

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
        const peserta_asuh = await Mentor.findOne({_id: body._id}).populate("peserta_asuh.quests").sort({ createdAt: -1});
        // mengambil data quest yang paling akhir dari masing-masing peserta asuh
        //peserta_asuh.find({}).populate("quests").sort({ createdAt: -1})
        // mengambil data peserta asuh berdasarkan id peserta, bagaimana cara membaca datanya?
        //const pesertasList = await Peserta.find();
        console.log(peserta_asuh)
        res.status(200).send(peserta_asuh);
      } catch (error) {
        res.status(500).send({ err: error });
      }
  }

  // Menampilkan detail penyelesaian dari quest yang dipilih
  static async detailPenyelesaian(req, res) {
    try {
        const id_quest = req.params.id_quest;
        const detailPenyelesaian = await Quest.find({ _id: id_quest}).populate("files");
        res.status(200).send(detailPenyelesaian);
    } catch (error){
        res.status(500).send({ err: error.message });
    }
  }

  static async createFeedback(req, res) {
    try {
        const body = req.body;
        const id_peserta = body.id_peserta;
        const id_mentor = body.id_mentor;
        const id_quest = body.id_quest;
        const konten = body.konten;
  
        const feedback = new Feedback({
          id_peserta: id_peserta,
          id_mentor: id_mentor,
          id_quest: id_quest,
          konten: konten
        });
  
        const saved = await feedback.save();
        res.status(201).send(saved);
      } catch (error) {
        res.status(500).send({ err: error });
        console.log(error)
      }
  }

  static async createMap(req, res) {
    try {
        const body = req.body;
        const id_peserta = body.id_peserta;
  
        const map = new Map({
          id_peserta: id_peserta,
        });
  
        const saved = await map.save();
        res.status(201).send(saved);
      } catch (error) {
        res.status(500).send({ err: error });
        console.log(error)
      }
  }

  static async createQuest(req, res) {
    try {
        const body = req.body;
        const id_peserta = body.id_peserta;
        const id_mentor = body.id_mentor;
        const id_maps = body.id_maps
        const konten = body.konten;
  
        const quest = new Quest({
          konten: konten,
          id_peserta: id_peserta,
          id_mentor: id_mentor,
          id_maps: id_maps
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
