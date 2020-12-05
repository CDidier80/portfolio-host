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
      Profile.belongsTo(model.User, {
        foreingKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',  
      })
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
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'profile_picture',
    },
    professionalTitle: {
      type: DataTypes.STRING,
      allNull: true,
      field: 'professional_title'
    },
    organization: DataTypes.STRING,
    skills: DataTypes.STRING,
    local: DataTypes.STRING,
    bio: DataTypes.STRING,
    userId: {
      type: Sequelize.INTEGER,
      allowNull:false,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id'
      }
  }, 
    sequelize,
    modelName: 'Profile',
    tableName: 'profiles'
  });
  return Profile;
};