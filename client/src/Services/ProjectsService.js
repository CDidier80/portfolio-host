import ApiClient from "./ApiClient"

export const CreateProject = async (payload) =>  {
    console.log("LOG:-->  FILE: ProjectsService.js  FUNCTION: CreateProject() -->  Reached, carrying payload: ", payload)

    try {
        let userId = payload.id
        const response = await ApiClient.post(`projects/create/${userId}`, payload)
        console.log('after post',response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const ReadProject = async (payload) =>  {
    console.log("LOG:-->  FILE: ProjectsService.js  FUNCTION: ReadProject() -->  Reached, carrying payload: ", payload)

    try {
        let projectId = payload.id
        const response = await ApiClient.get(`projects/read/${projectId}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const GetAllProjects = async (payload) =>  {
    console.log("LOG:-->  FILE: ProjectsService.js  FUNCTION: GetAllProjects() -->  Reached, carrying payload: ", payload)

    try {
        const response = await ApiClient.get(`projects/`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const GetUsersProjects = async (payload) =>  {
    console.log("LOG:-->  FILE: ProjectsService.js  FUNCTION: GetAllProjects() -->  Reached, carrying payload: ", payload)

    try {
        const response = await ApiClient.get(`projects/user`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const UpdateProject = async (payload) =>  {
    console.log("LOG:-->  FILE: ProjectsService.js  FUNCTION: UpdateProject() -->  Reached, carrying payload: ", payload)

    try {
        let projectId = payload.id
        const response = await ApiClient.put(`projects/update${projectId}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const DeleteProject = async (payload) =>  {
    console.log("LOG:-->  FILE: ProjectsService.js  FUNCTION: DeleteProject() -->  Reached, carrying payload: ", payload)

    try {
        let projectId = payload.id
        const response = await ApiClient.delete(`projects/${projectId}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

