const { User, Profile } = require('../models')
// const { Op, literal, fn, col  } = require('sequelize')
const { checkPassword, generatePassword } = require('../middleware/PasswordHandler')
const { createToken } = require('../middleware/jwthandler')
const { ControllerLoggers } = require('../Helpers')
const log = ControllerLoggers.UserControllerLog, errorLog = ControllerLoggers.UserControllerErrorLog
const show = true



const CreateUser = async (req, res) => {
    log(CreateUser, req, show)
    try {
        // check if an email already exists
        const userExists = await User.findOne({
            where: { email: req.body.email },
            raw: true
        })
        if (userExists) {
            res.send({
                message: 'account already exists'
            })
        }

        let { body } = req
        const { password, name, email } = body
        console.log("password, name and email:", password, name, email)
        const password_digest = await generatePassword(body.password)
        console.log("password_digest:", password_digest)
        let updatedBody = { name, email, password_digest }
        console.log("BODY WITH ADDED PASSWORD DIGEST: ", updatedBody)
        let user = await User.create(updatedBody)


        let userId = user.dataValues.id
        const profileBody = {
            userId,
            profilePicture: 'https://image.flaticon.com/icons/png/512/23/23228.png',
            ...req.body
        }
        let profile = await Profile.create(profileBody)
        let response = {
            user,
            ...profile
        }
        res.send(response)

    } catch (error) {
        throw error
    }
}

const ReadUser = async (req, res) => {
    log(ReadUser, req, show)
    try {
        let userId = req.params.user_id
        let user = await User.findByPk(userId)
        res.send(user)
    } catch (error) {
        errorLog(ReadUser, error, show)
    }
}

const UpdateUser = async (req, res) => {
    log(UpdateUser, req, show)
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
    log(DeleteUser, req, show)
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
    try {

        let { email } = req.body

        const user = await User.findOne({
            where: {
                email: email
            }
        })
        let { id } = user.dataValues
        const profile = await Profile.findOne({
            where: {
                userId: id
            }
        })

        if (
            user &&
            (await checkPassword(req.body.password, user.password_digest))
        ) {
            const payload = {
                _id: user._id,
                name: user.name,
                userName: user.userName,
                ...profile.dataValues
            }
            let token = createToken(payload)

            return res.send({ user, profile, token })
        }
        res.status(401).send({ msg: 'Unauthorized' })
    } catch (error) {
        throw error
    }
}

const RefreshSession = async (req, res) => {
    try {
        const { token } = res.locals
        const user = await User.findByPk(token.id, {
            attributes: ['id', 'name', 'emai']
        })
        res.send({ user, status: 'OK' })
    } catch (error) {
        throw error
    }
}

module.exports = {
    CreateUser,
    ReadUser,
    DeleteUser,
    UpdateUser,
    LogInUser,
    RefreshSession
}