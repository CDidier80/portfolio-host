import ApiClient from "./ApiClient"
const { get, put, post } = ApiClient 
// del = ApiClient.delete

const CreateProfile = async (payload, params) =>  {
    try {
        const response = await post(`projects/create${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const ReadProfile = async (payload, params) =>  {
    try {
        const response = await get(`projects/read${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const ReadAllProfiles = async (payload, params) =>  {
    try {
        const response = await get(`projects/read${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const UpdateProfile = async (payload, params) =>  {
    try {
        const response = await put(`projects/update${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    CreateProfile, 
    ReadProfile, 
    ReadAllProfiles, 
    UpdateProfile
}