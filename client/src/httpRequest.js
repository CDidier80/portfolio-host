/* httpRequest.js exports: httpRequest, post, get, put, del             */
/* The latter four exports are deconstructred Axios api call methods    */

import axios from 'axios'
const {valueIfExists: inspectPayload} = require("./ClientHelpers")

/**
 * @param {string} routeKey
 * @param {object} payload
 * @param {object} payload.body
 * @param {string} payload.params
 * @param {array} dataRequest
 */
/* Example payload => {body:{title: "project title"}, params:{"/:user_id/:project_id"}} */

export const httpRequest = (controllerFunction, payload, dataRequest) => {
    const {body} = inspectPayload(payload.body, {}), params = inspectPayload(payload.params, "")
    // const userRequestedData = inspectPayload(dataRequest, false)
    
    const route = {

        /* For object route {key:value}, key refers to the controller function called by value's CRUD request */

        /*                       User Routes                       */
        LogInUser:         post(`UserRouter/login${params}`   , body),
        CreateUser:        post(`UserRouter/create${params}`  , body), 
        ReadUser:          get(`UserRouter/read${params}`     , body),
        UpdateUser:        put(`UserRouter/update${params}`   , body), 
        DeleteUser:        del(`UserRouter/delete${params}`   , body),

        /*                      Profile Routes                     */
        CreateProfile:     post(`profiles/create${params}`    , body),
        ReadProfile:       get(`profiles/read${params}`       , body), 
        ReadAllProfiles:   get(`profiles/read${params}`       , body), 
        UpdateProfile:     put(`profiles/update${params}`     , body),

        /*                      Projects Routes                     */
        CreateProject:     post(`UserRouter/create${params}`  , body),
        ReadProject:       get(`UserRouter/read${params}`     , body),  
        GetAllProjects:    get(`UserRouter/read${params}`     , body), 
        UpdateProject:     put(`UserRouter/update${params}`   , body), 

        // deleteProject:     del(`UserRouter/delete${params}`, body)
    }
    try {
        const response = () => async () => await route[controllerFunction]()
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }
}

const ApiClient = axios.create({ baseURL: 'http://localhost:3003/api/' })
export const {post, get, put} = ApiClient 
export const del = (path) => ApiClient.delete(path)

// uncomment when AUTH is ready
// ApiClient.interceptors.request.use(
//     async (config) => {
//     const token = localStorage.getItem('token')
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//     },
//     (err) => Promise.reject(err)
// )
        


// response parsing code
// const keys = Object.keys(response)
// ==> ["key", "key" , "key", "key"]  desired by user
// keys.map((key) => )

// const dataToReturn = userRequestedData ? Object.entries(response).filter([k,v] =>  ) dataRequest.forEach