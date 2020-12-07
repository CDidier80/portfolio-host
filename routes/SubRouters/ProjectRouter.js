const Router = require('express').Router()
const controller = require('../../controllers/ProjectsController')

// Create
Router.post('/create/:user_id', controller.CreateProject)

// // Read
Router.get('/read/:project_id', controller.ReadProject)

// Update
Router.put('/update/:project_id', controller.UpdateProject)

// // Delete
// need a delete one method
// Router.delete('/delete/:project_id', controller.DeleteProject)
Router.get('/:user_id', controller.GetAllProjects)
Router.delete('/:project_id', controller.DeleteProject)

module.exports = Router
