'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('profiles', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        field: 'user_id',
        unique: true,
        references: {
          model: 'users',
          key: 'id',
        }
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
      locale: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
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


