'use strict';
const { User, sequelize } = require('../models')
const faker = require('faker');


const profilePictures = [
  'https://images.pexels.com/photos/4067753/pexels-photo-4067753.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/5414020/pexels-photo-5414020.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/6053890/pexels-photo-6053890.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/730017/pexels-photo-730017.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/4431045/pexels-photo-4431045.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
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
