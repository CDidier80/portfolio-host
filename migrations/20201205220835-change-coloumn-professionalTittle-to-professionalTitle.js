'use strict';

const { stringify } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'profiles',
      'professionalTitle',
      {
        type: Sequelize.STRING,
        field: 'professional_title'
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'profiles',
      'professionalTitle'
    )
  }
};
