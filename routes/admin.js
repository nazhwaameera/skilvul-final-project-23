const express = require("express");
const router = express.Router();

const AdminController = require("../controllers/admin.controller");

router.get("/", AdminController.getAdmins);
router.post("/login", AdminController.loginAdmin);
router.post("/create-peserta", AdminController.createPeserta);
router.post("/create-mentor", AdminController.createMentor);

module.exports = router;
