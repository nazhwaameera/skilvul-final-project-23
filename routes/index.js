const express = require("express");

const auth = require("../middleware/auth");

const adminRoutes = require("./admin");


// creates a new router instance.
const router = express.Router();

router.get("/ping", (req, res) => {
  const ready = {
    status: "server is ready",
  };

  res.status(200).send(ready);
});

router.use("/admin",  adminRoutes);

module.exports = router;
