const express = require("express");
const router = express.Router();

const PesertaController = require("../controllers/peserta.controller");

router.post("/login", PesertaController.loginPeserta);
router.get("/profil/:nama", PesertaController.lihatProfil);
router.get("/mentoring", PesertaController.mentoring);
router.get("/feedbacks", PesertaController.lihatFeedbacksbyID);
router.get("/profil/:nama", PesertaController.lihatAchievementsbyID);
router.get("/todos", PesertaController.lihatTodosbyID);
router.post("/todos/add-todo", PesertaController.createTodo);
router.delete("/todos/:id_todo", PesertaController.deleteTodo);
router.get("/todos/get-all", PesertaController.getAllTodos);
router.get("/maps/:id_maps", PesertaController.getActiveMap);
router.post("/maps/:id_maps/quests/:id_quest", PesertaController.menyelesaikanQuest);

module.exports = router;
