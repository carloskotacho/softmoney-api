import { NOT_FOUND } from 'http-status-codes';

import Customer from '../models/Customer';

class CustomerController {
  async store(req, res) {
    const {
      id,
      name,
      street,
      number,
      neighborhood,
      post_code,
      city_id,
      active,
    } = await Customer.create(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      neighborhood,
      post_code,
      city_id,
      active,
    });
  }

  async update(req, res) {
    const customer = await Customer.findByPk(req.params.id);

    if (!customer) {
      return res.status(NOT_FOUND).json({ error: 'Customer not found' });
    }

    const {
      id,
      name,
      street,
      number,
      neighborhood,
      post_code,
      city_id,
      active,
      avatar_id,
    } = await customer.update(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      neighborhood,
      post_code,
      city_id,
      active,
      avatar_id,
    });
  }
}

export default new CustomerController();
