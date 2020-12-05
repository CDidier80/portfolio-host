'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Profile.init({
    userId: {
      type:DataTypes.INTEGER,
      field: 'user_id',
      allNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    profilePicture: DataTypes.STRING,
    professionalTitle: DataTypes.STRING,
    organization: DataTypes.STRING,
    skills: DataTypes.STRING,
    local: DataTypes.STRING,
    bio: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'profiles'
  });
  return Profile;
};