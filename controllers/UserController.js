const { User } = require('../models')
// const { Op, literal, fn, col  } = require('sequelize')
const  { ControllerLoggers }  = require('../Helpers')
const log = ControllerLoggers.UserControllerLog, errorLog = ControllerLoggers.UserControllerErrorLog
const show = true



const CreateUser = async (req, res) => {
    log(CreateUser, req, showLogs)
    try {
        let userBody = {
            ...req.body
        }
        let user = await User.create(userBody)
        res.send(user)
    } catch (error) {
        errorLog(CreateUser, error, show)
    }
}

<<<<<<< HEAD
=======
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

>>>>>>> ff3610046618da4a7db35d2e23c8513ca64dd872
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

const LogInUser = async (req, res) => {
    log(LogInUser, req, showLogs)
    try {
        let email = req.body.email
        let password = req.body.password

        let user = await User.findOne({
            where: {
                email: email
            },
            returning: true
        })
        if (user != null & password === user.password_digest) {
            res.send(user)
        }
        res.status(401).send({msg: 'Unauthorized'})
    } catch (error) {
        errorLog(LogInUser, error, show)
    }

}

module.exports = {
    CreateUser,
    ReadUser,
    DeleteUser,
    UpdateUser,
    LogInUser
}
