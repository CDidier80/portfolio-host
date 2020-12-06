const { User, Projects } = require('../models')
const { CreateUser } = require('./UserController')
// const  { valueIfExists: checkPayload, ControllerLoggers }  = require('../Helpers')
// const log = ControllerLoggers.ProjectsControllerLog
// const showLogs = true


const CreateProject = async (req, res) => {
    // log(CreateProject, req, checkPayload, showLogs)
    try {
        let userId = parseInt(req.params.user_id)
        let projectBody = {
            userId,
            ...req.body
        }
        let project = await Projects.create(projectBody)
        res.send(project)
    } catch(error) {
        throw error 
    }
}

const UpdateProject = async (req, res) => {
    // log(UpdateProject, req, checkPayload, showLogs)
    try {
        let projectId = parseInt(req.params.project_id)
        let updatedProject = await Projects.update(req.body, {
            where: {
                id: projectId
            },
            returning:true
        })
        res.send(updatedProject)
    } catch(error) {
        throw error
    }
}

const GetAllProjects = async (req, res) => {
    // log(GetAllProjects, req, checkPayload, showLogs)
    try {
        let userId = parseInt(req.params.user_id)
        console.log(userId)
        let projects = await Projects.findAll({
            where: {
                user_id:userId
            }
        })
        res.send(projects)
    } catch(error) {
        throw error 
    }
}
const ReadProject = async (req, res) => {
    // log(CreateProject, req, checkPayload, showLogs)
    try {
        let projectId = parseInt(req.params.project_id)
        let project = await Projects.findByPk(projectId)
        res.send(project)
    } catch(error) {
        throw error 
    }
}
module.exports = {
    CreateProject,
    UpdateProject,
    GetAllProjects,
    ReadProject
}