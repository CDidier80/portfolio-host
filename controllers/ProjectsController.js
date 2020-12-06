const { User, Projects } = require('../models')
const ProfileController = require('./ProfileController')


const CreateProject = async (req, res) => {
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
module.exports = {
    CreateProject,
    UpdateProject,
    GetAllProjects
}