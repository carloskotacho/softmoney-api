import Launch from '../models/Launch';

class LaunchController {
  async index(req, res) {
    const launches = await Launch.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    return res.json(launches);
  }
}

export default new LaunchController();
