import { BAD_REQUEST } from 'http-status-codes';

import Category from '../models/Category';

class CategoryController {
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
