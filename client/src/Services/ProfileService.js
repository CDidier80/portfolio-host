import ApiClient from "./ApiClient"

export const CreateProfile = async (payload, params) =>  {
    try {
        const response = await ApiClient.post(`projects/create${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const ReadProfile = async (payload, params) =>  {
    try {
        const response = await ApiClient.get(`projects/read${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const ReadAllProfiles = async (payload, params) =>  {
    try {
        const response = await ApiClient.get(`projects/read${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const UpdateProfile = async (payload, params) =>  {
    try {
        const response = await ApiClient.put(`projects/update${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}


