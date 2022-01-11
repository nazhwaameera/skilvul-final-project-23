const dotenv = require("dotenv");
dotenv.config();

const key = process.env.SECRET_KEY;

const jwt = require("jsonwebtoken");

const Admin = require("../models/admin");
const Peserta = require("../models/peserta");
const Mentor = require("../models/mentor");
const Quest = require("../models/quest");
const Feedback = require("../models/feedback");
const Todo = require("../models/todo");

class PesertaController {
  static async getPesertas(req, res) {
    try {
      const pesertasList = await Peserta.find();
      console.log(pesertasList)
      res.status(200).send(pesertasList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }


  static async loginPeserta(req, res) {
    try {
      const { email, password } = req.body;
      const peserta = await Peserta.findOne({ email });
      if (!peserta)
        return res.status(403).json({
          error: {
            message: "invalid email/password",
          },
        });
      const isValid = await peserta.isPasswordValid(password);
      if (!isValid)
        return res.status(403).json({
          error: { message: "invalid email/password" },
        });
      const token = getSignedToken(peserta);
      res.status(200).json({
        token,
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async lihatProfilbyID(req, res) {
    try {
        const email = req.body;
        const peserta = await Peserta.findOne({ email });
        res.status(200).send(peserta);
      } catch (error) {
        res.status(500).send({ err: error.message });
      }
  }

  static async mentoring(req, res) {
    try {
        const email = req.body;
        const peserta = await Peserta.findOne({ email }).populate('mentor_id','nama', 'no_telp');
        res.status(200).send(peserta);
      } catch (error) {
        res.status(500).send({ err: error.message });
      }
  }

  static async lihatFeedbacksbyID(req, res) {
    try {
        const email = req.body;
        const peserta = await Peserta.findOne({ email });
        res.status(200).send(peserta);
      } catch (error) {
        res.status(500).send({ err: error.message });
      }
  }

  static async lihatAchievementsbyID(req, res) {
    try {
        const email = req.body;
        const peserta = await Peserta.findOne({ email });
        res.status(200).send(peserta);
      } catch (error) {
        res.status(500).send({ err: error.message });
      }
  }

  static async lihatTodosbyID(req, res) {
    try {
        const email = req.body;
        const peserta = await Peserta.findOne({ email });
        res.status(200).send(peserta);
      } catch (error) {
        res.status(500).send({ err: error.message });
      }
  }

  static async createTodo(req, res) {
    try {
        const body = req.body;
        const konten = body.konten;
        
        const todo = new Todo({
          konten: konten
        });
  
        const saved = await todo.save();
        res.status(201).send(saved);
      } catch (error) {
        res.status(500).send({ err: error });
        console.log(error)
      }
  }

  static async deleteTodo(req, res) {
    const todo = await Todo.countDocuments({ _id: req.params.idtodo });

    let result;
    if (todo) {
      result = await Todo.findOneAndDelete({_id: req.params.idtodo }, function (err, todo) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted User : ", todo);
        }
    });
    }
  }
}



getSignedToken = (peserta) => {
  return jwt.sign(
    {
      id: peserta._id,
      email: peserta.email,
    },
    key,
    { expiresIn: "1h" }
  );
};

module.exports = PesertaController;
