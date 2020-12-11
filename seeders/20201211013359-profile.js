'use strict';
const faker = require('faker')
const { User, sequelize, Profile } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const profiles = await Promise.all(
      [...Array(12)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true, unique:true})
        return {
          user_id: user.id,
          profile_picture: 'https://image.flaticon.com/icons/png/512/23/23228.png',
          professional_title: 'Software Engineer',
          bio: faker.lorem.sentence(),
          locale: faker.address.city(),
        }
      })
    )
    return queryInterface.bulkInsert('profiles', profiles)
  },

  down: async (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('profiles')
  }
};
