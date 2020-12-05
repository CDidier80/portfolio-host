const Helpers = {
    valueIfExists = (variableToCheck, valueIfNot) => variableToCheck !== "undefined" ? variableToCheck : (valueIfNot !== "undefined" ? valueIfNot : null),
    ControllerLoggers: {
        UserControllerLog = (controllerFunction, req) => {
            const paramMessage = ` and params: ${valueIfExists(req.params, "")}`
            console.log(`Request arrived in UserController.js => controller function: ${controllerFunction} => carrying req.body: `, req.body, paramMessage)
            return
        },
        ProfileControllerLog = (controllerFunction, req) => {
            const paramMessage = ` and params: ${valueIfExists(req.params, "")}`
            console.log(`Request arrived in ProfileController.js => controller function: ${controllerFunction} => carrying req.body: `, req.body, paramMessage)
            return
        },
        ProjectControllerLog = (controllerFunction, req) => {
            const paramMessage = ` and params: ${valueIfExists(req.params, "")}`
            console.log(`Request arrived in ProjectController.js => controller function: ${controllerFunction} => carrying req.body: `, req.body, paramMessage)
            return
        }
    },
}


// module.exports = {
//     ProfileControllerLog, 
//     ProjectControllerLog, 
//     UserControllerLog
// }

export default Helpers