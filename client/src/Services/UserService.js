import ApiClient from "./ApiClient"
const { get, put, post } = ApiClient, del = ApiClient.delete

const LogInUser = async (payload, params) =>  {
    try {
        const response = await post(`users/login${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const CreateUser = async (payload, params) =>  {
    try {
        const response = await post(`users/create${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const ReadUser = async (payload, params) =>  {
    try {
        const response = await get(`users/update${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const UpdateUser = async (payload, params) =>  {
    try {
        const response = await put(`users/login${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const DeleteUser = async (payload, params) => {
    try {
        const response = await del(`users/delete${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    LogInUser, 
    CreateUser, 
    ReadUser, 
    UpdateUser,
    DeleteUser
}