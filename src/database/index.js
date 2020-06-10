import Sequelize from 'sequelize';

import User from '../app/models/User';
import Category from '../app/models/Category';
import State from '../app/models/State';
import City from '../app/models/City';
import databaseConfig from '../config/database';

const models = [User, Category, State, City];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
