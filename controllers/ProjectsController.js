const { Projects } = require('../models')
// const { CreateUser } = require('./UserController')
const  { ControllerLoggers }  = require('../Helpers')
const log = ControllerLoggers.ProjectsControllerLog, errorLog = ControllerLoggers.ProjectsControllerErrorLog
const show = true


const CreateProject = async (req, res) => {
    log(CreateProject, req, show)
    try {
        let userId = req.params.user_id
        let projectBody = {
            userId,
            ...req.body
        }
        let project = await Projects.create(projectBody)
        res.send(project)
    } catch(error) {
        errorLog(error)
    }
}

const ReadProject = async (req, res) => {
    log(CreateProject, req, show)
    try{
        let projectId = req.params.project_id
        let updatedProject = await Projects.update(req.body, {
            where: {
                id: projectId
            },
            returning:true
        })
        res.send(updatedProject)
    } catch(error) {
        errorLog(error)
    }
}

const GetAllProjects = async (req, res) => {
    log(GetAllProjects, req, show)
    try {
        let userId = req.params.user_id
        console.log(userId)
        let projects = await Projects.findAll({
            where: {
                user_id:userId
            }
        })
        res.send(projects)
    } catch(error) {
        errorLog(error)
    }
}

const UpdateProject = async (req, res) => {
    log(UpdateProject, req, show)
    try {

        let projectId = req.params.project_id
        let project = await Projects.findByPk(projectId)
        res.send(project)
    } catch(error) {
        throw error
    }
}

const DeleteProject = async (req, res) => {
    log(DeleteProject, req, show)
    try {
        let projectId = req.params.project_id
        await Projects.destroy({    
            where: {id:projectId}
        })
        res.send({message: 'project destroyed'})
    } catch (err) {
        throw err
    }
}


module.exports = {
    CreateProject,
    UpdateProject,
    GetAllProjects,
    ReadProject,
    DeleteProject
}