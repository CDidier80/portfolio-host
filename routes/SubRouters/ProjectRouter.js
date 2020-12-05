const Router = require('express').Router()
const controller = require('../controllers/ProjectController')

// Create
Router.post('/create', controller.CreateProject)

// Read
Router.get('/read/:project_id', controller.ReadProject)

// Update
Router.put('/update/:project_id', controller.UpdateProject)

// Delete
// We may want to consider putting this into a master delete method
Router.delete('/delete/:project_id', controller.DeleteProject)


module.exports = Router