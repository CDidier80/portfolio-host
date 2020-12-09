import ApiClient from "./ApiClient"

export const LogInUser = async (payload, params) =>  {
    try {
        const response = await ApiClient.post(`users/login${params}`, payload)
        localStorage.setItem('token', response.data.token)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const CreateUser = async (payload, params) =>  {
    try {
        const response = await ApiClient.post(`users/create${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const ReadUser = async (payload, params) =>  {
    try {
        const response = await ApiClient.get(`users/update${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const UpdateUser = async (payload, params) =>  {
    try {
        const response = await ApiClient.put(`users/login${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const DeleteUser = async (payload, params) => {
    try {
        const response = await ApiClient.delete(`users/delete${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const CheckSessionService = async () => {
    try{
        const res = await ApiClient.get('users/session')
        return res.data
    } catch (error) {
        throw error
    }
}

// module.exports = {
//     LogInUser, 
//     CreateUser, 
//     ReadUser, 
//     UpdateUser,
//     DeleteUser, 
//     CheckSessionService
// }

