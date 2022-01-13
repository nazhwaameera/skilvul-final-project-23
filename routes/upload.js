const express = require("express");
const uploadController = require("../controllers/upload.controller");

const router = express.Router();

router.post("/post", uploadController.createPost);

module.exports = router;
