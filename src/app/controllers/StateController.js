import State from '../models/State';

class StateController {
  async index(req, res) {
    const states = await State.findAll({
      attributes: ['id', 'name'],
    });

    return res.json(states);
  }
}

export default new StateController();
