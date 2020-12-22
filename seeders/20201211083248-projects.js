'use strict';
const { User } = require('../models')

const title = [
  'car race',
  'Netlixo',
  'anime & manga app',
  'music-share',
  'animal friends'
]

const description = [
  'a classic fun car race game made with C++',
  'a knock-off netflix',
  'your app to check out anime and manga',
  'your app to share music with your friends for free via bluetooth!',
  'love animals? Check ou my app and see cute videos'
]

const technologies = [
  'C++',
  'React',
  'MERN',
  'PERN and API',
  'javascript, HTML,CSS'
]

const project_picture = [
  ' https://i.gadgets360cdn.com/large/best_android_games_main_1589521185888.jpg?downsize=950:*&output-quality=80&output-format=webp',
  ' https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?resize=450,253',
  ' https://cdn57.androidauthority.net/wp-content/uploads/2019/06/Fullmetal-Alchemist-best-anime-on-Netflix.jpg',
  ' https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg',
  ' https://i1.wp.com/www.dailycal.org/assets/uploads/2019/10/animals_wikimedia_cc.jpg?ssl=1&w=900'
]

const deploy_link = [
  'github.com',
  'github.com',
  'github.com',
  'github.com',
  'github.com',
]


module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = await User.findAll({ limit: 5 })
    const projects = await Promise.all(
      project_picture.map(async (picture, index) => {
        let user = users[index]
        // let user = await User.findOne({ order: sequelize.random(), raw: true, limit: 10 })
        return {
          user_id: user.id,
          title: title[index],
          description: description[index],
          technologies: technologies[index],
          project_picture: picture,
          deploy_link: deploy_link[index],
        }
      })
    )
    console.log('before return: ', projects)
    return queryInterface.bulkInsert('projects', projects)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projects')
  }
};