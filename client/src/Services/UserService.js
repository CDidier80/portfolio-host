import ApiClient from "./ApiClient"

const LogInUser = async (payload, params) =>  {
    try {
        const response = await ApiClient.post(`users/login${params}`, payload)
        localStorage.setItem('token', response.data.token)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const CreateUser = async (payload, params) =>  {
    try {
        const response = await ApiClient.post(`users/create${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const ReadUser = async (payload, params) =>  {
    try {
        const response = await ApiClient.get(`users/update${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const UpdateUser = async (payload, params) =>  {
    try {
        const response = await ApiClient.put(`users/login${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const DeleteUser = async (payload, params) => {
    try {
        const response = await ApiClient.delete(`users/delete${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const CheckSessionService = async () => {
    try{
        const res = await ApiClient.get('users/session')
        return res.data
    } catch (error) {
        throw error
    }
}

module.exports = {
    LogInUser, 
    CreateUser, 
    ReadUser, 
    UpdateUser,
    DeleteUser, 
    CheckSessionService
}

