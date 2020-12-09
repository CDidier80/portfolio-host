const { User } = require('../models')
// const { Op, literal, fn, col  } = require('sequelize')
const {checkPassword, generatePassword} = require('../middleware/PasswordHandler')
const  { ControllerLoggers }  = require('../Helpers')
const log = ControllerLoggers.UserControllerLog, errorLog = ControllerLoggers.UserControllerErrorLog
const show = true



const CreateUser = async (req, res) => {
    log(CreateUser, req, showLogs)
    try {
        let userBody = req.body
        const password_digest = await generatePassword(body.password)
        userBody.password = password_digest
        let user = await User.create(userBody)
        res.send(user)
    } catch (error) {
        errorLog(CreateUser, error, show)
    }
}

// const DeleteUser = async (req, res) => {
//     log(DeleteUser, req, showLogs)
//     try {
//         let userId = req.params.user_id
//         await User.destroy({
//             where: {
//                 id: userId
//             }
//         })
//         res.send({
//             message: `Deleted user with id of ${userId}`
//         })
//     } catch (error) {
//         throw error
//     }
// }

const ReadUser = async (req, res) => {
    log(ReadUser, req, showLogs)
    try {
        let userId = req.params.user_id
        let user = await User.findByPk(userId)
        res.send(user)
    } catch (error) {
        errorLog(ReadUser, error, show)
    }
}

const UpdateUser = async (req, res) => {
    log(UpdateUser, req, showLogs)
    try {
        let userId = req.params.user_id
        let updatedUser = await User.update(req.body, {
            where: {
                id: userId
            },
            returning: true
        })
        res.send(updatedUser)
    } catch (error) {
        errorLog(UpdateUser, error, show)
    }
}
const DeleteUser = async (req, res) => {
    log(DeleteUser, req, showLogs)
    try {
        let userId = parseInt(req.params.user_id)
        console.log(userId)
        await User.destroy({
            where: {
                id: userId
            }
        })
        res.send({
            message: `Deleted user with ide of ${userId}`
        })
    } catch (error) {
        errorLog(DeleteUser, error, show)
    }
}

const LogInUser = async (req, res, next) => {
    log(LogInUser, req, showLogs)
    try {
        let {email, password} = request.body

        let user = await User.findOne({
            where: {
                email: email
            },
            returning: true
        })
        if (user && await checkPassword(password, user.password_digest)) {
            console.log("User found, password matched password digest.")
            res.locals.payload = {_id: user._id, username: user.username}
            console.log('res.locals payload is: ', res.locals.payload)
            console.log('LogInUser now uses next() => createToken() in jtwhandler.js')
            return next()    // next() refers to the createToken() method in /middleware/jwthandler.js, which is the 2nd function to run in the UserRouter.js login post request
                             // you need return because otherwise the function will continue running. It WILL start the next function at the same time as finishing this one
        }
        res.status(401).send({ msg: 'Invalid email address or password' })
    } catch (error) {
        errorLog(LogInUser, error, show)
    }
}

const RefreshSession = (req, res) => {
    const token = res.locals.token
    res.send(token)
    }

module.exports = {
    CreateUser,
    ReadUser,
    DeleteUser,
    UpdateUser,
    LogInUser, 
    RefreshSession
}
