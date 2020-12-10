import ApiClient from "./ApiClient"


// AUTH-IMPLEMENTED ROUTE: 
// 1) React function calls LoginUser() to send user login info payload -->
// 2) FILE: UserService.js,     FUNCTION: LoginUser(),     PURPOSE: Send API request. -->
// 3) FILE: UserController.js,  FUNCTION: LogInUser(),     PURPOSE (step 1): Find record of user, call checkPassword() -->
// 4) FILE: passwordhandler.js, FUNCTION: checkPassword(), PURPOSE: Hash user input password to compare against password_digest on record -->
// 6) FILE: UserController.js,  FUNCTION: LogInUser(),     PURPOSE (step 2): Replace raw password in req.body with password_digest, call createToken() -->
// 6) FILE: jwthandler.js,      FUNCTION: CreateToken(),   PURPOSE: Use secret key in .env to get token, add to payload, and send response -->
// 7) FILE: UserService.js,     FUNCTION: LogInUser(),     PURPOSE: Receive response, place token in local storage, and return to client -->
// 8) React function receives response and indicates an "authenticated" state for the session -->
export const LogInUser = async (payload, params) =>  {
    try {
        const response = await ApiClient.post(`users/login${params}`, payload)
        localStorage.setItem('token', response.data.token)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

// AUTH-IMPLEMENTED ROUTE: 
// 1) React function calls CreateUser() to send user info payload -->
// 2) FILE: UserService.js,     FUNCTION: CreateUser(),       PURPOSE: Send API request. -->
// 3) FILE: UserController.js,  FUNCTION: CreateUser(),       PURPOSE (step 1): Call generatePassword() hashing function -->
// 4) FILE: passwordhandler.js, FUNCTION: generatePassword(), PURPOSE: Hash user password and return password digest -->
// 6) FILE: UserController.js,  FUNCTION: CreateUser(),       PURPOSE (step 2): Save user account in DB with hashed password -->
// 7) FILE: UserService.js,     FUNCTION: CreateUser(),       PURPOSE: Receive response and return to client -->
// 8) React function receives user payload and indicates an "authenticated" state for the session -->
export const CreateUser = async (payload) =>  {
    try {
        const response = await ApiClient.post(`users/create`, payload)
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

