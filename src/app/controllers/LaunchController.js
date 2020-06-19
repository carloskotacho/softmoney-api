import { NOT_FOUND } from 'http-status-codes';
import Launch from '../models/Launch';

class LaunchController {
  async index(req, res) {
    const launches = await Launch.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    return res.json(launches);
  }

  async findById(req, res) {
    const launch = await Launch.findByPk(req.params.id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (!launch) {
      return res.status(NOT_FOUND).json({ error: 'Launch not found' });
    }

    return res.json(launch);
  }
}

export default new LaunchController();
