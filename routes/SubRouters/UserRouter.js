const Router = require('express').Router()
const controller = require('../controllers/UsersController')

// Create
Router.post('/create', controller.CreateUser)
Router.post('/login', controller.LogInUser)

// Read
Router.get('/read/:user_id', controller.ReadUser)

// Update
Router.put('/update/:user_id', controller.UpdateUser)

// Delete
// We may want to put this into a master delete method
Router.delete('/delete/:user_id', controller.DeleteUser)


module.exports = Router
