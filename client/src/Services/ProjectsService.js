import ApiClient from "./ApiClient"
const { get, put, post } = ApiClient, del = ApiClient.delete

const CreateProject = async (payload, params) =>  {
    try {
        const response = await post(`projects/create${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const ReadProject = async (payload, params) =>  {
    try {
        const response = await get(`projects/read${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const GetAllProjects = async (payload, params) =>  {
    try {
        const response = await get(`projects/${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const UpdateProject = async (payload, params) =>  {
    try {
        const response = await put(`projects/update${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const DeleteProject = async (payload, params) =>  {
    try {
        const response = await del(`projects/${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    CreateProject, 
    ReadProject, 
    GetAllProjects, 
    UpdateProject,
    DeleteProject
}