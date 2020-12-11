'use strict';
const faker = require('faker')
const { User, sequelize } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const profiles = await Promise.all(
      [...Array(32)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true})
        return {
          profile_picture: 
        }
      })
    )
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
