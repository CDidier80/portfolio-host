const Router = require('express').Router()
const controller = require('../../controllers/ProjectsController')

// Create
Router.post('/create/:user_id', controller.CreateProject)

// // Read
Router.get('/read/:project_id', controller.ReadProject)
Router.get('/', controller.GetAllProjects)


// Update
Router.put('/update/:project_id', controller.UpdateProject)

// // Delete
// need a delete one method
// Router.delete('/delete/:project_id', controller.DeleteProject)
Router.delete('/:project_id', controller.DeleteProject)

module.exports = Router
