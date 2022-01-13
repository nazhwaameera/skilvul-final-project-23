const express = require("express");
const uploadRoutes = require("./upload");

// creates a new router instance.
const router = express.Router();

router.get("/ping", (req, res) => {
  const ready = {
    status: "server is ready",
  };

  res.status(200).send(ready);
});

router.use("/upload", uploadRoutes);

module.exports = router;
