const Router = require('express').Router()
const controller = require('../../controllers/UserController')

// Create
Router.post('/create', controller.CreateUser)
// Router.post('/login', controller.LogInUser)

// Read
Router.get('/read/:user_id', controller.ReadUser)

// Update
Router.put('/update/:user_id', controller.UpdateUser)

// Delete
// cascade will delete all associated projects and the user's profile
Router.delete('/delete/:user_id', controller.DeleteUser)

// login
Router.post('/login', controller.LogInUser)

module.exports = Router
