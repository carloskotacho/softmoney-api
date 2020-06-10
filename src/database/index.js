import Sequelize from 'sequelize';

import User from '../app/models/User';
import Category from '../app/models/Category';
import State from '../app/models/State';
import databaseConfig from '../config/database';

const models = [User, Category, State];

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
