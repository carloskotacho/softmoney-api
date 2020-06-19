import Sequelize from 'sequelize';

import User from '../app/models/User';
import Category from '../app/models/Category';
import State from '../app/models/State';
import City from '../app/models/City';
import Customer from '../app/models/Customer';
import File from '../app/models/File';
import Launch from '../app/models/Launch';

import databaseConfig from '../config/database';

const models = [User, Category, State, City, Customer, File, Launch];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
