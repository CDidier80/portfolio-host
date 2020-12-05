'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'projects',
      [
        {
          user_id: 2,
          title: 'testTitle',
          description: 'testDes'
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projects')
  }
};
