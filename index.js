const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const routes = require("./routes");
const openDBConnection = require("./helpers/db");

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

async function main() {
  try {
    // mastikan database connect, baru kita jalankan app.
    await openDBConnection(uri);

    const app = express();

    app.use(express.json()); // biar kita bisa ambil request body.

    app.use(routes);

    // app.use("/protected", auth, (req, res) => {
    //   res.end(`Hi ${req.user.name}, you are authenticated`);
    // });

    app.use((req, res, next) => {
      const err = new Error("not found");
      err.status = 404;
      next(err);
    });

    app.use((err, req, res, next) => {
      const status = err.status || 500;
      res.status(status).json({ error: { message: err.message } });
    });

    app.listen(port, () => {
      console.log("server is listening on port", port);
    });
  } catch (error) {
    console.log("main:", error);
  }
}

main(); // menjalankan main.
