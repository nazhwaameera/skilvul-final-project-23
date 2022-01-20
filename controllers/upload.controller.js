const File = require("../models/file");

class uploadController {
  static async createPost(req, res) {
    try {
      const file = req.file.path;

      const upload = new File({
        file: file,
      });

      const saved = await upload.save();
      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

module.exports = uploadController;
