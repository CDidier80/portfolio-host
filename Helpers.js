exports.valueIfExists = (variableToCheck, valueIfNot) => variableToCheck ? variableToCheck : valueIfNot

exports.ControllerLoggers = {
    UserControllerLog : (controllerFunction, req, boolean) => {
        boolean ? console.log(`Request arrived in UserController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body,  " and params: ", req.params) : null
        return
    },
    ProfileControllerLog : (controllerFunction, req, boolean) => {
        boolean ? console.log(`Request arrived in ProfileController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body, " and params: ", req.params): null
        return
    },

    ProjectsControllerLog : (controllerFunction, req, boolean) => {
        boolean ? console.log(`Request arrived in ProjectController.js => controller function: ${controllerFunction.name} => carrying req.body: `, req.body, " and params: ", req.params): null
        return
    },
    UserControllerErrorLog : (controllerFunction, error, boolean) => {
        boolean ? console.log(`Error caught in UserController.js => controller function: ${controllerFunction.name}: `, error) : null
        return
    },
    ProjectsControllerErrorLog : (controllerFunction, error, boolean) => {
        boolean ? console.log(`Error caught in ProjectsController.js => controller function: ${controllerFunction.name}: `, error) : null
        return
    },
    ProfileControllerErrorLog : (controllerFunction, error, boolean) => {
        boolean ? console.log(`Error caught in ProfileController.js => controller function: ${controllerFunction.name}: `, error) : null
        return
    }
}