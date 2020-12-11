'use strict';
const { User, sequelize } = require('../models')
const faker = require('faker');


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

const professional_title = [
  'Front-End Engineer',
  'Back-End Engineer',
  'UX Designer',
  'Data Scientist',
  'Full-Stack',
  'Software Developer',
  'Software Developer',
  'Data Analyst',
  'Dev Ops',
  'Game Designer',
]

const locale = [
  'New Yok',
  'Boston',
  'San Francisco',
  'Seatle',
  'Denver',
  'Los Angeles',
  'Portland',
  'Atlanta',
  'Miami',
  'Detroit',
]

const organization = [
  'Google',
  'Facebook',
  'Netflix',
  'Uber',
  'Amazon',
  'Netflix',
  'Amazon',
  'Tesla',
  'MomAndPoPShop',
  'NASA',
]


const bio = [
  faker.lorem.sentence(),
  faker.lorem.sentence(),
  faker.lorem.sentence(),
  faker.lorem.sentence(),
  faker.lorem.sentence(),
  faker.lorem.sentence(),
  faker.lorem.sentence(),
  faker.lorem.sentence(),
  faker.lorem.sentence(),
  faker.lorem.sentence(),
]
const skills = [
  'JS',
  'JAVA',
  'PYTHON',
  'C++',
  'C#',
  'C',
  'REACT',
  'MONGODB',
  'SQL',
  'MATLAB',
]



module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = await User.findAll({ limit: 10 })
    const profiles = await Promise.all(
      profilePictures.map(async (picture, index) => {
        let user = users[index]
        // let user = await User.findOne({ order: sequelize.random(), raw: true, limit: 10 })
        return {
          user_id: user.id,
          profile_picture: picture,
          professional_title: professional_title[index],
          locale: locale[index],
          organization: organization[index],
          bio: bio[index],
          skills: skills[index]
        }
      })
    )
    return queryInterface.bulkInsert('profiles', profiles)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('profiles')
  }
};
