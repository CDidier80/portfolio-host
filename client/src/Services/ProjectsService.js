import ApiClient from "./ApiClient"

export const CreateProject = async (payload, params) =>  {
    console.log("LOG:-->  FILE: ProjectsService.js  FUNCTION: CreateProject() -->  Reached, carrying payload: ", payload)

    try {
        const response = await ApiClient.post(`projects/create${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const ReadProject = async (payload, params) =>  {
    console.log("LOG:-->  FILE: ProjectsService.js  FUNCTION: ReadProject() -->  Reached, carrying payload: ", payload)

    try {
        const response = await ApiClient.get(`projects/read${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const GetAllProjects = async (payload, params) =>  {
    console.log("LOG:-->  FILE: ProjectsService.js  FUNCTION: GetAllProjects() -->  Reached, carrying payload: ", payload)

    try {
        const response = await ApiClient.get(`projects/`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const UpdateProject = async (payload, params) =>  {
    console.log("LOG:-->  FILE: ProjectsService.js  FUNCTION: UpdateProject() -->  Reached, carrying payload: ", payload)

    try {
        const response = await ApiClient.put(`projects/update${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const DeleteProject = async (payload, params) =>  {
    console.log("LOG:-->  FILE: ProjectsService.js  FUNCTION: DeleteProject() -->  Reached, carrying payload: ", payload)

    try {
        const response = await ApiClient.delete(`projects/${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

