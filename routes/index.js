const express = require("express");

const auth = require("../middleware/auth");

const adminRoutes = require("./admin");
const mentorRoutes = require("./mentor");
const pesertaRoutes = require("./peserta");


// creates a new router instance.
const router = express.Router();

router.get("/ping", (req, res) => {
  const ready = {
    status: "server is ready",
  };

  res.status(200).send(ready);
});

router.use("/admin",  adminRoutes);
router.use("/mentor",  mentorRoutes);
router.use("/peserta",  pesertaRoutes);

module.exports = router;
