import { NOT_FOUND, CREATED, BAD_REQUEST, NO_CONTENT } from 'http-status-codes';
import { startOfMonth, endOfMonth } from 'date-fns';

import { Op, fn, col } from 'sequelize';

import Launch from '../models/Launch';
import Category from '../models/Category';
import Customer from '../models/Customer';

class LaunchController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const launches = await Launch.findAll({
      limit: 20,
      offset: (page - 1) * 20,
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'category_id', 'customer_id'],
      },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
        {
          model: Customer,
          as: 'customer',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(launches);
  }

  async findById(req, res) {
    const launch = await Launch.findByPk(req.params.id, {
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'category_id', 'customer_id'],
      },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
        {
          model: Customer,
          as: 'customer',
          attributes: ['id', 'name'],
        },
      ],
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

  async update(req, res) {
    const launch = await Launch.findByPk(req.params.id);

    if (!launch) {
      return res.status(NOT_FOUND).json({ error: 'Launch not found' });
    }

    const { active } = await Customer.findByPk(launch.customer_id);

    if (!active) {
      return res.status(BAD_REQUEST).json({ error: 'Customer inactive' });
    }

    const { id, description } = await launch.update(req.body);

    return res.json({ id, description });
  }

  async delete(req, res) {
    const launch = await Launch.findByPk(req.params.id);

    if (!launch) {
      return res.status(NOT_FOUND).json({ error: 'Launch not found' });
    }

    await launch.destroy();

    return res.status(NO_CONTENT).json();
  }

  async perCategory(req, res) {

    const date = new Date();

    const launch = await Launch.findAll({
      where: {
        due_date: {
          [Op.between]: [ startOfMonth(date), endOfMonth(date) ],
        },
      },
      attributes: [
        [fn('sum', col('value')), 'total_value'],
      ],
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
      group: ['category.id'],
    });

    return res.json(launch);
  }

  async perDay(req, res) {

    const date = new Date();

    const launch = await Launch.findAll({
      where: {
        due_date: {
          [Op.between]: [ startOfMonth(date), endOfMonth(date) ],
        },
      },
      attributes: [
        'type',
        'due_date',
        [fn('sum', col('value')), 'total_value'],
      ],
      group: ['type', 'due_date'],
    });

    return res.json(launch);
  }
}

export default new LaunchController();
