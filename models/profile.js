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
      Profile.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete : "cascade",
        hooks: true
      })
    }
  };
  Profile.init({
    userId: { 
      type: DataTypes.INTEGER,
      allowNull: false, 
      field: 'user_id',
      onDelete: 'cascade',
      hooks: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    profilePicture: {
      type: DataTypes.STRING,
      field: profile_picture},
      professionalTitle: {
      type: DataTypes.STRING,
      field: professional_title},
    organization: DataTypes.STRING,
    skills: DataTypes.STRING,
    locale: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'profiles'
  });
  return Profile;
};