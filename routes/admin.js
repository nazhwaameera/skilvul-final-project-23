const express = require("express");
const router = express.Router();

const AdminController = require("../controllers/admin.controller");

router.post("/login/admin", AdminController.loginAdmin);
router.get("/create-peserta", AdminController.createPeserta);
router.post("/create-mentor", AdminController.createMentor);

module.exports = router;
