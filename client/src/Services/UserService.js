import ApiClient from "./ApiClient"
// const { get, put, post } = ApiClient, del = ApiClient.delete

export const LogInUser = async (payload, params) =>  {
    try {
        const response = await ApiClient.post(`users/login${params}`, payload)
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

// module.exports = {
//     LogInUser, 
//     CreateUser, 
//     ReadUser, 
//     UpdateUser,
//     DeleteUser
// }