const Router = require('express').Router()
const UserRouter = require('./UsersRouter')
const ProfileRouter = require('./ProfileRouter')
const ProjectRouter = require('./ProjectRouter')

Router.use('/UserRouter', UserRouter)
Router.use('/ProfileRouter', ProfileRouter)
Router.use('/ProjectRouter', ProjectRouter)

module.exports = Router
