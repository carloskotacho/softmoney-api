import { BAD_REQUEST } from 'http-status-codes';

import Category from '../models/Category';

class CategoryController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const categories = await Category.findAll({
      limit: 20,
      offset: (page - 1) * 20,
      attributes: ['id', 'name'],
    });

    return res.json(categories);
  }

  async store(req, res) {
    const categoryExists = await Category.findOne({
      where: { name: req.body.name },
    });

    if (categoryExists) {
      return res
        .status(BAD_REQUEST)
        .json({ error: 'Category already exists.' });
    }

    const { id, name } = await Category.create(req.body);

    return res.json({
      id,
      name,
    });
  }
}

export default new CategoryController();
