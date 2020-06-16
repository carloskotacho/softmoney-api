import { BAD_REQUEST } from 'http-status-codes';

import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.string(),
      neighborhood: Yup.string(),
      post_code: Yup.string(),
      city_id: Yup.number(),
      active: Yup.boolean(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(BAD_REQUEST)
      .json({ error: 'Validation fails', messages: err.inner });
  }
};
