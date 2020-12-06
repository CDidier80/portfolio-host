'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await Promise.all([
      queryInterface.removeConstraint('projects', 'projects_user_id_fkey'),
      queryInterface.addConstraint('projects', {
        fields: ['user_id'],
        type: 'foreign key',
        references: {
          table: 'users',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
        name: 'projects_users_id_fkey'
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'profiles',
      'userid',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        unique: true,
        references: {
          model: 'users',
          key: 'id',
        }
      }
    )
  }
};
