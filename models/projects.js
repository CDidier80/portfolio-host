'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Projects.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        constraints: true,
      })
    }
  };
  Projects.init({
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id',
      onDelete: 'cascade',
      constraints: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    technologies: DataTypes.STRING,
    projectPicture: {
      type: DataTypes.STRING,
      field: 'project_picture',
    },
    deployLink: {
      type: DataTypes.STRING,
      field: 'deploy_link'
    }
  }, {
    sequelize,
    modelName: 'Projects',
    tableName: 'projects'
  });
  return Projects;
};