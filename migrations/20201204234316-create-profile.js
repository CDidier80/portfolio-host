'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profilePicture: {
        field: 'profile_picture',
        type: Sequelize.STRING
      },
      professionalTitle: {
        field: 'professional_title',
        type: Sequelize.STRING
      },
      organization: {
        type: Sequelize.STRING
      },
      skills: {
        type: Sequelize.STRING
      },
      local: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('profiles');
  }
};