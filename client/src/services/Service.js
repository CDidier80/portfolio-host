import ApiClient from './ApiClient'


const pathLog = () = >


export default httpRequest = async (crudMethod, model, payload) => {
    switch (model) {
        case "User":
            switch (crudMethod) {
                case "create":
                    console.log("Request arrived in Service.js => table: 'User' => method: 'create' carrying payload: ", payload)
                    await ApiClient.post(`/UserRouter/create/`)
                    break
                case "login":
                    console.log("Request arrived in Service.js => table: 'User' => method: 'login' carrying payload: ", payload)
                    await ApiClient.post(`/UserRouter/login/`)
                    break
                case "read":
                    console.log("Request arrived in Service.js => table: 'User' => method: 'read' carrying payload: ", payload)
                    await ApiClient.read(`/UserRouter/login/`)
                    break
                case "update":
                    console.log("Request arrived in Service.js => table: 'User' => method: 'update' carrying payload: ", payload)
                    await ApiClient.put(`/UserRouter/login/`)
                    break
                case "delete":
                    console.log("Request arrived in Service.js => table: 'User' => method: 'delete' carrying payload: ", payload)
                    await ApiClient.delete(`/UserRouter/login/`)
                    break
            }
            break
        case "Project":
            switch (crudMethod) {
                case "create":
                    console.log("Request arrived in Service.js => table: 'Project' => method: 'create' carrying payload: ", payload)
                    await ApiClient.post(`/UserRouter/create/`)
                    break
                case "read":
                    console.log("Request arrived in Service.js => table: 'Project' => method: 'read' carrying payload: ", payload)
                    await ApiClient.read(`/UserRouter/login/`)
                    break
                case "update":
                    console.log("Request arrived in Service.js => table: 'Project' => method: 'update' carrying payload: ", payload)
                    await ApiClient.put(`/UserRouter/login/`)
                    break
                case "delete":
                    console.log("Request arrived in Service.js => table: 'Project' => method: 'delete' carrying payload: ", payload)
                    await ApiClient.delete(`/UserRouter/login/`)
                    break
        case "Profile":
            switch (crudMethod) {
                case "create":
                    console.log("Request arrived in Service.js => table: 'Project' => method: 'create' carrying payload: ", payload)
                    await ApiClient.post(`/UserRouter/create/`)
                    break
                case "read":
                    console.log("Request arrived in Service.js => table: 'Project' => method: 'read' carrying payload: ", payload)
                    await ApiClient.read(`/UserRouter/login/`)
                    break
                case "update":
                    console.log("Request arrived in Service.js => table: 'Project' => method: 'update' carrying payload: ", payload)
                    await ApiClient.put(`/UserRouter/login/`)
                    break
                case "delete":
                    console.log("Request arrived in Service.js => table: 'Project' => method: 'delete' carrying payload: ", payload)
                    await ApiClient.delete(`/UserRouter/login/`)
                    break
        default: 
            console.log("No cases matched. httpRequest() input or switch case name likely mispelled or mismatched.")
    }
}



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