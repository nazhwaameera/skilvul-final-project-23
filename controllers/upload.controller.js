const Upload = require("../models/upload");

class uploadController {
  static async createPost(req, res) {
    try {
      const title = req.body.title;
      const body = req.body.body;
      const file = req.file.path;

      const upload = new Upload({
        title: title,
        body: body,
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
