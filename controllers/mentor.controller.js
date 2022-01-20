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
      console.log(mentorsList);
      res.status(200).send(mentorsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getMaps(req, res) {
    try {
      const mapsList = await Map.find();
      console.log(mapsList);
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
        mentor,
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async showPeserta(req, res) {
    try {
      // const body = req.body;
      const id_mentor = req.params.id_mentor;
      // mengambil data peserta asuh dari id mentor
      const peserta_asuh = await Mentor.findOne({ _id: id_mentor }).populate([
        {
          path: "peserta_asuh",
          model: "Peserta",
          populate: {
            path: "quests",
            model: "Quest",
            options: { sort: { createdAt: 1 } },
          },
        },
      ]);
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
      const detailPenyelesaian = await Quest.find({ _id: id_quest })
        .populate([
          {
            path: "id_peserta",
            model: "Peserta",
          },
        ])
        .populate([
          {
            path: "files",
            model: "File",
          },
        ]);
      res.status(200).send(detailPenyelesaian);
    } catch (error) {
      res.status(500).send({ err: error.message });
    }
  }

  static async createFeedback(req, res) {
    const body = req.body;
    const id_quest = req.params.id_quest;
    const konten = body.konten;

    const feedback = new Feedback({
      id_quest: id_quest,
      konten: konten,
    });

    try {
      await feedback.save(async (err, feedback) => {
        //console.log("masuk sini")
        //console.log(feedback._id)
        await Quest.findOneAndUpdate({ _id: req.params.id_quest }, { $set: { feedback: feedback._id } }, { new: true });
      });
      res.status(201).send(feedback);
    } catch (error) {
      res.status(500).send({ err: error });
      console.log(error);
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
      console.log(error);
    }
  }

  static async createQuest(req, res) {
    const body = req.body;
    const id_peserta = body.id_peserta;
    const id_mentor = body.id_mentor;
    const id_maps = body.id_maps;
    const konten = body.konten;

    const questContent = new Quest({
      konten: konten,
      id_peserta: id_peserta,
      id_mentor: id_mentor,
      id_maps: id_maps,
    });

    try {
      await questContent.save(async (err, quest) => {
        await Map.findOneAndUpdate({ _id: req.body.id_maps }, { $addToSet: { quests: quest._id } }, { new: true });
        await Peserta.findOneAndUpdate({ _id: req.body.id_peserta }, { $addToSet: { quests: quest._id } }, { new: true });
      });
      console.log(questContent);
      res.status(201).send(questContent);
    } catch (error) {
      res.status(500).send({ err: error });
      console.log(error);
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
