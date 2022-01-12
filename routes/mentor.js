const express = require("express");
const router = express.Router();

const MentorController = require("../controllers/mentor.controller");

router.post("/login/admin", MentorController.loginAdmin);
router.get("/create-peserta", MentorController.createPeserta);
router.post("/create-mentor", MentorController.createMentor);

module.exports = router;
