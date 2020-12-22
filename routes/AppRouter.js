const Router = require('express').Router()
const UserRouter = require('./SubRouters/UserRouter')
const ProfileRouter = require( './SubRouters/ProfileRouter')
const ProjectRouter = require('./SubRouters/ProjectRouter')

Router.use('/users', UserRouter)
Router.use('/profile', ProfileRouter)
Router.use('/projects', ProjectRouter)
console.log("App router active")
module.exports = Router