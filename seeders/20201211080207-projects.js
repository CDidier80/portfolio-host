'use strict';
const { User, sequelize } = require('../models')
const faker = require('faker');
const { query } = require('express');

const title = [
  'compliment clicker',
  'find your burger',
  'covid-19',
  'weather',
  'cosplay-app'

]
const description = [
  'these are rough times, so check out my app - click the button and get a compliment to cheer up your day!',
  'app here to assist you with the best burger in your neighborhood',
  'your app to help you stay healthy and no the most current updates about covid in your neighborhood',
  ' a simple weather app made with React',
  'quick app to share and get ideas for great cosplay!',
]
const technologies = [
  'react',
  'MERN',
  'MERN',
  'React',
  'PERN'
]
const project_picture = [
  'https://c4.wallpaperflare.com/wallpaper/978/1001/218/smiley-happy-yellow-emoji-wallpaper-preview.jpg',
  'https://d3rsl50p8hwbdu.cloudfront.net/medium_07a34e7b-813c-4dca-9358-0e00886ebb5d.jpg',
  'https://www.google.com/imgres?imgurl=http%3A%2F%2Fsouthkingstownri.com%2FImageReposi[…]=covid-19&ved=2ahUKEwi_05Ojo8XtAhVbjOAKHYrSDtoQMygFegUIARCRAQ',
  'https://www.pexels.com/photo/snowy-pathway-surrounded-by-bare-tree-839462/',
  'https://www.pexels.com/photo/woman-wearing-maleficent-costume-950775/'
]
const deploy_link = [
  'github.com',
  'https://d3rsl50p8hwbdu.cloudfront.net/medium_07a34e7b-813c-4dca-9358-0e00886ebb5d.jpg',
  'github.com',
  'github.com',
  'github.com'
]


module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = await User.findAll({ limit: 5 })
    const projects = await Promise.all(
      project_picture.map(async (picture, index) => {
        let user = users[index]
        return {
          user_id: user.id,
          title: title[index],
          description: description[index],
          technologies: technologies[index],
          project_picture: picture,
          deploy_link: deploy_link[index]

        }
      })
    )
    return queryInterface.bulkInsert('projects', projects)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projects')
  }
};
