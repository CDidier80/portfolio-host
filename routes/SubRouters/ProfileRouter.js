const Router = require('express').Router()
const controller = require('../../controllers/ProfileController')

// Create
Router.post('/create/:user_id', controller.CreateProfile)

// Read
Router.get('/read/:profile_id', controller.ReadProfile)
Router.get('/', controller.ReadAllProfiles)

// Update
Router.put('/update/:profile_id', controller.UpdateProfile)

// * No Delete Method Due to Cascade * //

module.exports = Router