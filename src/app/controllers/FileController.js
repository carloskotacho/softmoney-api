import { CREATED } from 'http-status-codes';

import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.status(CREATED).json(file);
  }
}

export default new FileController();
