import { BAD_REQUEST } from 'http-status-codes';

import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      due_date: Yup.date().required(),
      pay_date: Yup.date().notRequired(),
      value: Yup.number().required(),
      observation: Yup.string().notRequired(),
      type: Yup.string().required(),
      category_id: Yup.number().required(),
      customer_id: Yup.number().required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(BAD_REQUEST)
      .json({ error: 'Validations fails', messages: err.inner });
  }
};
