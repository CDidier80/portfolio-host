import ApiClient from "./ApiClient"

export const CreateProfile = async (payload) =>  {
    console.log("LOG:-->  FILE: ProfileServices.js  FUNCTION: CreateProfile() -->  Reached, carrying payload: ", payload)
    try {
        let userId = payload.id
        const response = await ApiClient.post(`profile/create${userId}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const ReadProfile = async (payload) =>  {
    console.log("LOG:-->  FILE: ProfileServices.js  FUNCTION: ReadProfile() -->  Reached, carrying payload: ", payload)
    try {
        let profileId = payload.id 
        const response = await ApiClient.get(`profile/read${profileId}`, payload)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const ReadAllProfiles = async (payload) =>  {
    console.log("LOG:-->  FILE: ProfileServices.js  FUNCTION: ReadAllProfiles() -->  Reached, carrying payload: ", payload)
    try {
        const response = await ApiClient.get(`profile/`, payload)
        console.log(response)
        console.log('after response', response)
        console.log('inisde service, ', response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const UpdateProfile = async (payload) =>  {
    console.log("LOG:-->  FILE: ProfileServices.js  FUNCTION: UpdateProfile() -->  Reached, carrying payload: ", payload)
    try {
        const profileId = payload.id
        const response = await ApiClient.put(`profile/update/${profileId}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

