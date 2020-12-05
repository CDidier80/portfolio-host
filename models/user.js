'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        User.hasOne(models.Profile, {
          foreignKey: 'user_id',
          as: 'user_profile',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        })  
        User.hasMany(models.Projects, {
          foreignKey: 'user_id',
          as: 'user_project',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        })
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_digest: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;  
};