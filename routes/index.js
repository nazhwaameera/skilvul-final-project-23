const express = require("express");

const auth = require("../middleware/auth");

const hotelRoutes = require("./Hotel");
const reviewRoutes = require("./review");
const userRoutes = require("./user");
const wisataRoutes = require("./wisata");
const mapsRoutes = require("./maps");

// creates a new router instance.
const router = express.Router();

router.get("/ping", (req, res) => {
  const ready = {
    status: "server is ready",
  };

  res.status(200).send(ready);
});

router.use("/hotel",  hotelRoutes);
router.use("/review", auth, reviewRoutes);
router.use("/users",  userRoutes);
router.use("/wisata", auth, wisataRoutes);
router.use("/maps", auth, mapsRoutes);

module.exports = router;
