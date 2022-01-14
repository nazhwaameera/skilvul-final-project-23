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

  static async getMaps(req, res) {
    try {
      const mapsList = await Map.find();
      console.log(mapsList)
      res.status(200).send(mapsList);
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
        const id_mentor = body.id_mentor;
        // mengambil data peserta asuh dari id mentor
        const peserta_asuh = await Mentor.findOne({_id: body.id_mentor})
        .populate("peserta_asuh")
        //.populate("peserta_asuh.quests")
        // .select("peserta_asuh.nama");
        // console.log(peserta_asuh)
        res.status(200).send(peserta_asuh);
      } catch (error) {
        res.status(500).send({ err: error });
      }
  }

  static async detailPenyelesaian(req, res) {
    try {
        const id_quest = req.params.id_quest;
        const detailPenyelesaian = await Quest.find({ _id: id_quest}).select("tanggal_diberikan").select("tanggal_diselesaikan").select("konten").select("status").populate("files","file");
        res.status(200).send(detailPenyelesaian);
    } catch (error){
        res.status(500).send({ err: error.message });
    }
  }

  static async createFeedback(req, res) {
    try {
        const body = req.body;
        const id_quest = req.params.id_quest;
        const konten = body.konten;
  
        const feedback = new Feedback({
          id_quest: id_quest,
          konten: konten
        });
  
        const saved = await feedback.save(async(err, feedback) => {
          await Quest.findOneAndUpdate({ _id: req.body.id_quest }, { $addToSet: { feedback: feedback._id } }, { new: true });
        });
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
        const id_maps = body.id_maps;
        const konten = body.konten;
  
        const questContent = new Quest({
          konten: konten,
          id_peserta: id_peserta,
          id_mentor: id_mentor,
          id_maps: id_maps
        });
  
        const saved = await questContent.save(async(err, quest) => {
          await Map.findOneAndUpdate({ _id: req.body.id_maps }, { $addToSet: { quests: quest._id } }, { new: true });
          await Peserta.findOneAndUpdate({ _id: req.body.id_peserta }, { $addToSet: { quests: quest._id } }, { new: true });
        });
        console.log(saved);
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
