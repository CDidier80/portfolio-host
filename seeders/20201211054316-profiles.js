'use strict';
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
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
