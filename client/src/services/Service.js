import ApiClient from './ApiClient'

export default httpRequest = async (crudMethod, model, payload) => {
    switch (model) {
        case "User":
            switch (crudMethod) {
                case "create":
                    console.log("Request arrived in Service.js => table: 'User' => method: 'create' carrying payload: ", payload)
                    await ApiClient.post(`/UserRouter/create/`)
                    break
                case "login":
                    console.log("Request arrived in Service.js => table: 'User' => 'login' method: 'create' carrying payload: ", payload)
                    await ApiClient.post(`/UserRouter/create/`)
                    break
                case "read":
                    const users = await Users.findAll()
                    console.log(users)
                    break
                case "update":
                    const newValues = payload.newValues
                    const identifier = payload.identifier
                    await Users.update(newValues, {
                        where: identifier
                    });
                    break
                case "delete":
                    await Users.destroy({
                        where: payload
                    })
                    break
            }
            break
        case "Project":
            switch (crudMethod) {
                case "create":
                    await Projects.create({
                        title: payload.title, 
                        description: payload.description, 
                        deployLink: payload.deployLink, 
                        repoLink: payload.repoLink, 
                        technologies: payload.technologies, 
                        iframeEnabled: payload.iframeEnabled
                    })
                    break
                case "read":
                    const projects = await Projects.findAll()
                    console.log(projects)
                    break
                case "update":
                    const newValues = payload.newValues
                    const identifier = payload.identifier
                    await Projects.update(newValues, {
                        where: identifier
                    });
                    break
                case "delete":
                    await Projects.destroy({
                        where: payload
                    })
                    break
            }
            break
        case "Profile":
            switch (crudMethod) {
                case "create":
                    await Contributors.create({
                        projectId: payload.projectId,
                        userId: payload.userId,
                        role: payload.role
                    })
                    break
                case "read":
                    const problemos = await Contributors.findAll()
                    console.log(problemos)
                    break
                case "update":
                    const newValues = payload.newValues
                    const identifier = payload.identifier
                    await Contributors.update(newValues, {
                        where: identifier
                    });
                    break
                case "delete":
                    await Contributors.destroy({
                        where: Payload
                    })
                    break
            }
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