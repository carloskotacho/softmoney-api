import { NOT_FOUND, NO_CONTENT, BAD_REQUEST, CREATED } from 'http-status-codes';
import { Op } from 'sequelize';

import * as Yup from 'yup';
import Customer from '../models/Customer';

class CustomerController {
  async index(req, res) {
    const { page = 1, name } = req.query;

    const customers = await Customer.findAll({
      where: {
        name: {
          [Op.substring]: name,
        },
      },
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(customers);
  }

  async store(req, res) {
    await Customer.create(req.body);
    return res.status(CREATED).json();
  }

  async update(req, res) {
    const customer = await Customer.findByPk(req.params.id);

    if (!customer) {
      return res.status(NOT_FOUND).json({ error: 'Customer not found' });
    }

    await customer.update(req.body);

    return res.status(NO_CONTENT).json();
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
