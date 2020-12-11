'use strict';
const faker = require('faker')
const { User } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('profiles')
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
