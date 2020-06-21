import { NOT_FOUND, CREATED } from 'http-status-codes';

import Launch from '../models/Launch';
import Category from '../models/Category';
import Customer from '../models/Customer';

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

  async store(req, res) {
    const category = await Category.findByPk(req.body.category_id);

    if (!category) {
      return res.status(NOT_FOUND).json({ error: 'Category not found' });
    }

    const customer = await Customer.findByPk(req.body.customer_id);

    if (!customer) {
      return res.status(NOT_FOUND).json({ error: 'Customer not found' });
    }

    // TODO: verify type

    const { id, description } = await Launch.create(req.body);

    return res.status(CREATED).json({ id, description });
  }
}

export default new LaunchController();
