const  { valueIfExists: checkPayload, ControllerLoggers }  = require('./Helpers')
const log = ControllerLoggers.ProfileControllerLog
const showLogs = true


const makeProfile = (req, derp) => {
    log(makeProfile, req, checkPayload, showLogs)
    return 
}

let req = {body:{username: "hunter", password: "hunterSmash"}, params:"/:user_id"}
makeProfile(req)