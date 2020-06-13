import Customer from '../models/Customer';

class CustomerController {
  async store(req, res) {
    const {
      id,
      name,
      street,
      number,
      neighborhood,
      post_code,
      city_id,
      active,
    } = await Customer.create(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      neighborhood,
      post_code,
      city_id,
      active,
    });
  }
}

export default new CustomerController();
