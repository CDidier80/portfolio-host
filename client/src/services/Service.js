import axios from 'axios'
const ApiClient = axios.create({ baseURL: 'http://localhost:3003/api/' })
const {post, get, put} = ApiClient, del = (path) => ApiClient.delete(path)

/**
 * @param {string} routeKey
 * @param {object} payload   // payload => {body:{title: "project title"}, params:{"/:user_id/:project_id"}}
 * @param {array} dataRequest
 */
const httpRequest = (routeKey, payload, dataRequest) => {
    const valueIfExists = (variableToCheck, valueIfExists, valueIfNot) => variableToCheck !== "undefined" ? valueIfExists : (valueIfNot !== "undefined" ? valueIfNot : null)
    const {body} = valueIfExists(payload.body, payload.body, {}), params = valueIfExists(payload.params, payload.params, "")
    const userRequestedData = valueIfExists(dataRequest, true, false)
    // each key of the route object shares its name with the controller at the end of the route
    const route = {
        login: post(`UserRouter/login${params}`, body),
        createUser: post(`UserRouter/create${params}`, body), 
        readUser: get(`UserRouter/read${params}`, body),
        updateUser: put(`UserRouter/update${params}`, body), 
        deleteUser: del(`UserRouter/delete${params}`, body),
    
        createProfile: post(`ProfileRouter/create${params}`, body),
        readProfile: get(`ProfileRouter/read${params}`, body), 
        updateProfile: put(`ProfileRouter/update${params}`, body), 
        deleteProfile: del(`ProfileRouter/delete${params}`, body), 
    
        createProject: post(`UserRouter/create${params}`, body),
        readProject: get(`UserRouter/read${params}`, body),  
        updateProject: put(`UserRouter/update${params}`, body), 
        deleteProject: del(`UserRouter/delete${params}`, body)
    }
    try {
        const response = () => async () => await route[routeKey]()
        
        const keys = Object.keys(response)
        // ==> ["key", "key" , "key", "key"]  desired by user
        // keys.map((key) => )
        
        // 
        const dataToReturn = userRequestedData ? Object.entries(response).filter([k,v] =>  ) dataRequest.forEach
        return
    } catch (error) {
        console.log(error)
    }
}

httpRequest("login",{})

extractResponse({username: usernameField, password: passField}).data.loggedIn
setLoggedIn(extractResponse({username: usernameField, password: passField}).data.loggedIn)

// <button onClick={()=> setLoggedIn(((()=>httpRequest("User", props.post, "login", {username: "collin", password: "pass"})).userLoggedIn))}></button>
    // const c = crudMethod, m = model, p = payload, report = {c:c, m:m, p:p}, log = (report) => console.log(`Request arrived in Server.js => table: ${report.m} => method: '${report.c}' carrying payload: `, report.p)
    // const {post, get, put, delete} = ApiClient 

// example: httpRequest("User", props.post, "login", {username: "collin", password: "pass"})
    


/**
 * @param {object} payload
 */

const httpRequest = async (Model, AxiosMethod, crudMethod, payload) => await AxiosMethod(`${Model}Router/${crudMethod}/`)
const extractResponse = (payload) => httpRequest(rteLogin, payload)
extractResponse({username: usernameField, password: passField}).data.loggedIn
setLoggedIn(extractResponse({username: usernameField, password: passField}).data.loggedIn)






    // export default httpRequest = async (AxiosMethod, crudMethod, model,  payload) => {

   //    'ProjectRouter/

// const crudSwitch = (model, crudMethod) => {
//     switch (crudMethod) {
//         case "create":
//             log(report)
//             await ApiClient.post(`/UserRouter/create/`)
//             break
//         case "login":
//             log(report)
//             await ApiClient.post(`/UserRouter/login/`)
//             break
//         case "read":
//             log(report)
//             await ApiClient.read(`/UserRouter/login/`)
//             break
//         case "update":
//             log(report)
//             await ApiClient.put(`/UserRouter/login/`)
//             break
//         case "delete":
//             log(report)
//             await ApiClient.delete(`/UserRouter/login/`)
//             break
//     }
//     break
// }

// case "User":
//     crudSwitch("User")
// case "Profile":
//     crudSwitch("Profile")
// case "Project":
//     crudSwitch("Project")
// }








//     switch (model) {
//         case "User":
//             switch (crudMethod) {
//                 case "create":
//                     log(report)
//                     await ApiClient.post(`/UserRouter/create/`)
//                     break
//                 case "login":
//                     log(report)
//                     await ApiClient.post(`/UserRouter/login/`)
//                     break
//                 case "read":
//                     log(report)
//                     await ApiClient.read(`/UserRouter/login/`)
//                     break
//                 case "update":
//                     log(report)
//                     await ApiClient.put(`/UserRouter/login/`)
//                     break
//                 case "delete":
//                     log(report)
//                     await ApiClient.delete(`/UserRouter/login/`)
//                     break
//             }
//             break
//         case "Project":
//             switch (crudMethod) {
//                 case "create":
//                     log(report)
//                     await ApiClient.post(`/UserRouter/create/`)
//                     break
//                 case "read":
//                     log(report)
//                     await ApiClient.read(`/UserRouter/login/`)
//                     break
//                 case "update":
//                     log(report)
//                     await ApiClient.put(`/UserRouter/login/`)
//                     break
//                 case "delete":
//                     log(report)
//                     await ApiClient.delete(`/UserRouter/login/`)
//                     break
//         case "Profile":
//             switch (crudMethod) {
//                 case "create":
//                     log(report)
//                     await ApiClient.post(`/UserRouter/create/`)
//                     break
//                 case "read":
//                     log(report)
//                     await ApiClient.read(`/UserRouter/login/`)
//                     break
//                 case "update":
//                     log(report)
//                     await ApiClient.put(`/UserRouter/login/`)
//                     break
//                 case "delete":
//                     log(report)
//                     await ApiClient.delete(`/UserRouter/login/`)
//                     break
//         default: 
//             console.log("No cases matched. httpRequest() input or switch case name likely mispelled or mismatched.")
//     }
// }

// switch (crudMethod) {
//             case "create":
//                 log(report)
//                 await ApiClient.post(`${Model}Router/${crudMethod}/`)
//                 break
//             case "login":
//                 log(report)
//                 await ApiClient.post(`/UserRouter/login/`)
//                 break
//             case "read":
//                 log(report)
//                 await ApiClient.read(`/UserRouter/login/`)
//                 break
//             case "update":
//                 log(report)
//                 await ApiClient.put(`/UserRouter/login/`)
//                 break
//             case "delete":
//                 log(report)
//                 await ApiClient.delete(`/UserRouter/login/`)
//                 break
//         }
//         break
//     default: 
//         console.log("No cases matched. httpRequest() input or switch case name likely mispelled or mismatched.")
// }
// }

    // CRUD REQUESTS AS FOLLOWS: 

    // Create: 
    // httpRequest("create", ('Projects' | 'Contributors' | 'Users'), {...field: value, field: value})

    // Read: 
    // httpRequest("read", ('Projects' | 'Contributors' | 'Users'))

    // Update: 
    // httpRequest("update", ('Projects' | 'Contributors' | 'Users'), { newValues: {...field: NEWvalue, field: NEWvalue}, identifier: {field: currentValue}})

    // Delete: 
    // httpRequest("update", ('Projects' | 'Contributors' | 'Users'), {field: identifyingValue})


// httpRequest("create", "Projects", {
//     title: "PROJECT1000", 
//     description: "1000", 
//     deployLink: "1000", 
//     repoLink: "1000", 
//     technologies: "1000", 
//     iframeEnabled: true
// })


// httpRequest("update", "Projects", {newValues: {language: "Ruby"}, identifier: {language: 'Python'}})
// httpRequest("delete", "Projects", {language: "Ruby"})


// httpRequest("read", "Projects")


// httpRequest("create", "Users", {
//     name: "USER 1", 
//     email: "collin@yahoo.com", 
//     password: "hi", 
//     profilepic: "extremelyhandsome.filehost.com", 
//     professionalTitle: "Beast", 
//     organization: "Google", 
//     biography: "A cool person.", 
//     locale: "Chicago"})


// httpRequest("update", "Users", {newValues: {email: "adam@mail.com"}, identifier: {lastName: 'Honore'}})
// httpRequest("delete", "Users", {lastName: "Honore"})
// httpRequest("read", "Users")


// httpRequest("create", "Contributors", {projectId:4, userId:2, role: "creator"})
// httpRequest("update", "Contributors", {newValues: {prompt: "Fix the for-loop"}, identifier: {prompt: "Write a for-loop"}})
// httpRequest("delete", "Contributors", {prompt: "Fix the for-loop"})
// httpRequest("read", "Contributors")


// const ContributorsWithCore = async () => {
//     try {
//       const Contributors = await Contributors.findAll({
//         include: [{ model: Cores, as: 'parentCore' }]
//       })
//       console.log(Contributors)
//       return true
//     } catch (error) {
//       console.log(error)
//       return false
//     }
//   }
  
// ContributorsWithCore()