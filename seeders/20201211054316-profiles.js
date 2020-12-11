'use strict';
const {User, sequelize } = require('../models')
const faker = require('faker');
const { query } = require('express');

const profilePictures = [
  'images/pexels-adrienn-1542085.jpg',
  'images/pexels-designecologist-975680.jpg',
  'images/pexels-giftpunditscom-1310474.jpg',
  'images/pexels-jimmy-jimmy-1484794.jpg',
  'images/pexels-jimmy-jimmy-1484810.jpg',
  'images/pexels-martin-péchy-2078265.jpg',
  'images/pexels-pixabay-220453.jpg',
  'images/pexels-pixabay-415829.jpg',
  'images/pexels-sebastian-libuda-678783.jpg'
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const profiles = await Promise.all(
      [...Array(10)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true})
        return {
          user_id: user.id,
          profile_picture: profilePictures[Math.random * profilePictures.length],
          professional_title: 'Software Engineer'
        }
      })
    )
    return queryInterface.bulkInsert  ('profiles', profiles)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('profiles')
  }
};
