import { BAD_REQUEST } from 'http-status-codes';

import User from '../models/User';

class UserController {
  async store(req, res) {

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(BAD_REQUEST).json({ error: 'User already exists.' })
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
