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

  static async lihatProfil(req, res) {
    try {
      const nama = req.params.nama;

      const profil = await Peserta.findOne({nama: nama}).select('nama').select('kelas').select('asal_sekolah').select('level').select('exp').select('quests').select('achievements')
      //menampilkan sebagian properti dari dokumen peserta dengan nama yang diinginkan
      res.status(200).send(profil)
    } catch (error) {
        res.status(500).send({err: error})
    }
  }

  static async mentoring(req, res) {
    try {
        const email = req.body;
        const peserta = await Peserta.findOne({ email })
        .populate({
          path : 'mentor_id',
          select : 'nama', 
          select : 'no_telp'
        });
        res.status(200).send(peserta);
      } catch (error) {
        res.status(500).send({ err: error.message });
      }
  }

  static async lihatFeedbacksbyID(req, res) {
    try {
        const email = req.body;
        const peserta = await Peserta.findOne({ email })
        .select('nama').select('kelas').select('asal_sekolah').select('level').select('exp')
        .populate({
          path : 'quest.feedback',
          select : 'konten',
        });
        res.status(200).send(peserta);
      } catch (error) {
        res.status(500).send({ err: error.message });
      }
  }

  static async lihatAchievementsbyID(req, res) {
    try {
        const email = req.body;
        const peserta = await Peserta.findOne({ email }).select('nama').select('kelas').select('asal_sekolah').select('level').select('exp')
        .populate({
          path : 'quests',
          select : 'konten',
          select : 'status'
        })
        .populate({
          path : 'achievements',
          select : 'title'
        });
        res.status(200).send(peserta);
      } catch (error) {
        res.status(500).send({ err: error.message });
      }
  }

  static async lihatTodosbyID(req, res) {
    try {
        const email = req.body;
        const peserta = await Peserta.findOne({ email })
        .populate({
          path : 'todos',
          select : 'konten',
          select : 'status'
        });
        //menampilkan konten todos tiap peserta
        res.status(200).send(peserta);
      } catch (error) {
        res.status(500).send({ err: error.message });
      }
  }

  static async createTodo(req, res) {
    try {
        const body = req.body;
        const id_peserta = body.id_peserta;
        const konten = body.konten;
        
        const todo = new Todo({
          id_peserta: id_peserta,
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
    try {
      const id = req.params.id_todo;
      await Todo.deleteOne({_id: id})
      res.status(200).send({message: `${id} has been Deleted`})
    } catch (error) {
        res.status(500).send({err: error})
    }
  }

  static async getAllTodos(req, res) {
    try {
      const todoList = await Todo.find();
      console.log(todoList)
      res.status(200).send(todoList.konten);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getActiveMap(req, res) {
    try {
      const id = req.params.id_maps;

      const activeMap = await Map.findOne({_id: id})
      .populate({
        path : 'quests',
        select : 'konten',
      });
      console.log(activeMap)
      res.status(200).send(activeMap);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async menyelesaikanQuest(req, res) {
    try {
      const body = req.body;
      const id_maps = req.params.id_maps;
      const id_quest = req.params.id_quest;
      const id_peserta = body.id_peserta;
      const file = body.file;
     
      const file = new File({
        id_peserta: id_peserta,
        //id_maps: id_maps,
        id_quest: id_quest,
        file: file
      });

      const saved = await file.save(async(err, file) => {
        await Quest.findOneAndUpdate({ _id: req.body.id_quest }, { $addToSet: { files: file._id } , $set: { status: "Finished", tanggal_diselesaikan: Date.now()} }, { new: true });
      });
      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send({ err: error });
      console.log(error)
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
