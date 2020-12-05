'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpddate: 'CASCADE'
      })
    }
  };
  Project.init({
    userId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    technologies: DataTypes.STRING,
    picture: DataTypes.STRING,
    deployLink: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'project',
  });
  return Project;
};