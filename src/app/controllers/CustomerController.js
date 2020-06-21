import { NOT_FOUND, NO_CONTENT, BAD_REQUEST, CREATED } from 'http-status-codes';

import * as Yup from 'yup';
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

    return res.status(CREATED).json({
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

  async updateActive(req, res) {
    const schema = Yup.object().shape({
      active: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(BAD_REQUEST).json({ error: 'Validations fails' });
    }

    const customer = await Customer.findByPk(req.params.id);

    if (!customer) {
      return res.status(NOT_FOUND).json({ error: 'Customer not found' });
    }

    await customer.update({ active: req.body.active });

    return res.status(NO_CONTENT).json();
  }

  async delete(req, res) {
    const customer = await Customer.findByPk(req.params.id);

    if (!customer) {
      return res.status(NOT_FOUND).json({ error: 'Customer not found' });
    }

    await customer.destroy();

    return res.status(NO_CONTENT).json();
  }
}

export default new CustomerController();
