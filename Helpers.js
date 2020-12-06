exports.valueIfExists = (variableToCheck, valueIfNot) => variableToCheck ? variableToCheck : valueIfNot
exports.ControllerLoggers = {
    UserControllerLog : (controllerFunction, req, valueIfExists, boolean) => {
        // const body
        const paramMessage = ` and params: ${valueIfExists(req.params, "")}`
        boolean ? console.log(`Request arrived in UserController.js => controller function: ${controllerFunction} => carrying req.body: `, req.body, paramMessage) : null
        return
    },
    ProfileControllerLog : (controllerFunction, req, valueIfExists, boolean) => {
        const paramMessage = ` and params: ${valueIfExists(req.params, "")}`
        boolean ? console.log(`Request arrived in ProfileController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body, paramMessage): null
        return
    },

    ProjectsControllerLog : (controllerFunction, req, valueIfExists, boolean) => {
        const paramMessage = ` and params: ${valueIfExists(req.params, "")}`
        boolean ? console.log(`Request arrived in ProjectController.js => controller function: ${controllerFunction} => carrying req.body: `, req.body, paramMessage): null
        return
    }
}
