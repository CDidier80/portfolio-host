const Router = require('express').Router()
const controller = require('../../controllers/ProfileController')

// Create
Router.post('/create/:user_id', controller.CreateProfile)

// Read
Router.get('/read/:profile_id', controller.ReadProfile)

// Update
Router.put('/update/:profile_id', controller.UpdateProfile)

// Read All Profiles
Router.get('/', controller.ReadAllProfiles)

module.exports = Router
