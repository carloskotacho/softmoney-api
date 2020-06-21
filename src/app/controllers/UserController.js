import { BAD_REQUEST, UNAUTHORIZED, CREATED } from 'http-status-codes';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(BAD_REQUEST).json({ error: 'User already exists.' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.status(CREATED).json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(BAD_REQUEST).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res
        .status(UNAUTHORIZED)
        .json({ error: 'Password does not match' });
    }

    const { id, name, provider, avatar_id } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
      avatar_id,
    });
  }
}

export default new UserController();
