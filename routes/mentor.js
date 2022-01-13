const express = require("express");
const router = express.Router();

const MentorController = require("../controllers/mentor.controller");

router.post("/login", MentorController.loginMentor);
router.get("/dashboard", MentorController.showPeserta);
router.get("/dashboard/detail-penyelesaian/:id_quest", MentorController.detailPenyelesaian);
router.post("/:id_quest?create=feedback", MentorController.createFeedback);
router.post("/create-map", MentorController.createMap);
router.post("/create-quest", MentorController.createQuest);

module.exports = router;
