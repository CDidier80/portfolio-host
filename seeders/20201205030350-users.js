'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'testingName',
          email: 'testing@email.com',
          password_digest: 'password123'
        },
        {
          id: 2,
          name: 'testingName2',
          email: 'testin2g@email.com',
          password_digest: 'password123'
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users')
  }
};
