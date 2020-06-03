import { BAD_REQUEST } from 'http-status-codes';

import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

  } catch (err) {
    return res.status(BAD_REQUEST).json({ error: 'Validation fails', messages: err.inner });
  }
};
