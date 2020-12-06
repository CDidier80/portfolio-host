exports.valueIfExists = (variableToCheck, valueIfNot) => variableToCheck ? variableToCheck : valueIfNot
exports.ControllerLoggers = {
    UserControllerLog : (controllerFunction, req, valueIfExists, boolean) => {
        boolean ? console.log(`Request arrived in UserController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params) : null
        return
    },
    ProfileControllerLog : (controllerFunction, req, valueIfExists, boolean) => {
        boolean ? console.log(`Request arrived in ProfileController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body, " and params: ", req.params): null
        return
    },

    ProjectsControllerLog : (controllerFunction, req, valueIfExists, boolean) => {
        boolean ? console.log(`Request arrived in ProjectController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body, " and params: ", req.params): null
        return
    }
}
