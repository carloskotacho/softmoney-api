import { BAD_REQUEST } from 'http-status-codes';

import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      description: Yup.string(),
      due_date: Yup.date(),
      pay_date: Yup.date(),
      value: Yup.number(),
      observation: Yup.string(),
      type: Yup.string(),
      category_id: Yup.number(),
      customer_id: Yup.number(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(BAD_REQUEST)
      .json({ error: 'Validation fails', messages: err.inner });
  }
};
