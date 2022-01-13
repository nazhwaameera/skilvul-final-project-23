const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const routes = require("./routes");
const openDBConnection = require("./helpers/db");
const multer = require("multer");
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

async function main() {
  const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "files");
    },
    filename: (req, file, cb) => {
      cb(null, new Date().getTime() + "-" + file.originalname);
    },
  });

  const fileFilter = (req, file, cb) => {
    cb(null, true);
  };

  try {
    // mastikan database connect, baru kita jalankan app.
    await openDBConnection(uri);

    const app = express();

    app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single("file"));

    app.use(express.json()); // biar kita bisa ambil request body.

    app.use(routes);

    app.listen(port, () => {
      console.log("server is listening on port", port);
    });
  } catch (error) {
    console.log("main:", error);
  }
}

main(); // menjalankan main.
