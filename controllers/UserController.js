const { User } = require('../models')
const { Op, literal, fn, col  } = require('sequelize')
const  { valueIfExists: checkPayload, ControllerLoggers }  = require('../Helpers')
const log = ControllerLoggers.UserControllerLog
const showLogs = true



const CreateUser = async (req, res) => {
    log(CreateUser, req, checkPayload, showLogs)
    try {
        let userBody = {
            ...req.body
        }
        let user = await User.create(userBody)
        res.send(user)
    } catch (error) {
        throw error
    }
}
const DeleteUser = async (req, res) => {
    log(DeleteUser, req, checkPayload, showLogs)
    try {
        let userId = parseInt(req.params.user_id)
        await User.destroy({
            where: {
                id: userId
            }
        })
        res.send({
            message: `Deleted user with id of ${userId}`
        })
    } catch (error) {
        throw error
    }
}
const ReadUser = async (req, res) => {
    log(ReadUser, req, checkPayload, showLogs)
    try {
        let userId = parseInt(req.params.user_id)
        let user = await User.findByPk(userId)
        res.send(user)
    } catch (error) {
        throw error
    }
}
const UpdateUser = async (req, res) => {
    log(UpdateUser, req, checkPayload, showLogs)
    try {
        let userId = parseInt(req.params.user_id)
        let updatedUser = await User.update(req.body, {
            where: {
                id: userId
            },
            returning: true
        })
        res.send(updatedUser)
    } catch (error) {
        throw error
    }
}
const LogInUser = async (req, res) => {
    log(LogInUser, req, checkPayload, showLogs)
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
        throw error
    }

}

module.exports = {
    CreateUser,
    ReadUser,
    DeleteUser,
    UpdateUser,
    LogInUser
}
