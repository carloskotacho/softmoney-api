import { NOT_FOUND } from 'http-status-codes';

import State from '../models/State';
import City from '../models/City';

class CityController {
  async findByState(req, res) {
    const { stateId } = req.params;

    const state = await State.findByPk(stateId);

    if (!state) {
      return res.status(NOT_FOUND).json({ error: 'State not found' });
    }

    const cities = await City.findAll({
      where: { state_id: stateId },
      attributes: ['id', 'name'],
    });

    if (!cities) {
      return res.status(NOT_FOUND).json({ error: 'Cities not found' });
    }

    return res.json(cities);
  }
}

export default new CityController();
