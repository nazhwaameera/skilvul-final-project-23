const express = require("express");
const router = express.Router();

const PesertaController = require("../controllers/peserta.controller");

router.post("/login/admin", PesertaController.loginAdmin);
router.get("/create-peserta", PesertaController.createPeserta);
router.post("/create-mentor", PesertaController.createMentor);

module.exports = router;
