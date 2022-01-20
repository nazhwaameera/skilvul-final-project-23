const express = require("express");
const router = express.Router();

const MentorController = require("../controllers/mentor.controller");

router.post("/login", MentorController.loginMentor);
router.get("/dashboard/:id_mentor", MentorController.showPeserta);
router.get("/dashboard/detail-penyelesaian/:id_quest", MentorController.detailPenyelesaian);
router.post("/create-feedback/:id_quest", MentorController.createFeedback);
router.post("/create-map", MentorController.createMap);
router.get("/get-maps", MentorController.getMaps);
//bisa terupdate tapi data tidak disend
router.post("/create-quest", MentorController.createQuest);

module.exports = router;
