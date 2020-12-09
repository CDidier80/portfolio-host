const { User } = require('../models')
// const { Op, literal, fn, col  } = require('sequelize')
const { checkPassword, generatePassword } = require('../middleware/PasswordHandler')
// const  { ControllerLoggers }  = require('../Helpers')
// const log = ControllerLoggers.UserControllerLog, errorLog = ControllerLoggers.UserControllerErrorLog
// const show = true



const CreateUser = async (req, res) => {
    // log(CreateUser, req, showLogs)
    try {
        const { name, email, password } = req.body
        const passwordDigest = await hashPassword(password) // Creating a hashed password
        const user = await User.create({ name, email, passwordDigest }) // Store the hashed password in the database
        res.send(user)
    } catch (error) {
        throw error
    }

}


const ReadUser = async (req, res) => {
    // log(ReadUser, req, showLogs)
    try {
        let userId = req.params.user_id
        let user = await User.findByPk(userId)
        res.send(user)
    } catch (error) {
        // errorLog(ReadUser, error, show)
        throw error
    }
}

const UpdateUser = async (req, res) => {
    // log(UpdateUser, req, showLogs)
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
        // errorLog(UpdateUser, error, show)
        throw error
    }
}
const DeleteUser = async (req, res) => {
    // log(DeleteUser, req, showLogs)
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
        // errorLog(DeleteUser, error, show)
        throw error
    }
}

const LogInUser = async (req, res, next) => {
    // log(LogInUser, req, showLogs)
    try {
        // let { email, password } = request.body

        // let user = await User.findOne({
        //     where: {
        //         email: email
        //     },
        //     returning: true
        // })
        // if (user && await checkPassword(password, user.password_digest)) {
        //     console.log("User found, password matched password digest.")
        //     res.locals.payload = { _id: user._id, username: user.username }
        //     console.log('res.locals payload is: ', res.locals.payload)
        //     console.log('LogInUser now uses next() => createToken() in jtwhandler.js')
        //     return next()    // next() refers to the createToken() method in /middleware/jwthandler.js, which is the 2nd function to run in the UserRouter.js login post request
        //     // you need return because otherwise the function will continue running. It WILL start the next function at the same time as finishing this one
        // }
        // res.status(401).send({ msg: 'Invalid email address or password' })
        let email = req.body.email
        let password = req.body.password

        let user = await User.findOne({
            where: {
                email: email
            },
            returning: true
        })
        console.log('pass:', user.password)
        console.log('email:', user.email)
    } catch (error) {
        // errorLog(LogInUser, error, show)
        throw error
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
