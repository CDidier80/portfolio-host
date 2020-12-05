'use strict';

const user = require("../models/user");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'profiles',
      [
        {
          id: 10,
          user_id: 1
        },
        {
          id:11,
          user_id: 2
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('profiles')
  }
};
/// target => source