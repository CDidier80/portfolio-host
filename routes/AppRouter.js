const Router = require('express').Router()
const UserRouter = require('./SubRouters/UserRouter')
const ProfileRouter = require( './SubRouters/ProfileRouter')
const ProjectRouter = require('./SubRouters/ProjectRouter')

Router.use('/users', UserRouter)
// Router.use('/ProfileRouter', ProfileRouter)
// Router.use('/ProjectRouter', ProjectRouter)

module.exports = Router
