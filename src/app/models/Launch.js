import Sequelize, { Model } from 'sequelize';

class Launch extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        due_date: Sequelize.DATE,
        pay_date: Sequelize.DATE,
        value: Sequelize.STRING,
        observation: Sequelize.STRING,
        type: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: 'category_id' });
    this.belongsTo(models.Customer, { foreignKey: 'customer_id' });
  }
}

export default Launch;
