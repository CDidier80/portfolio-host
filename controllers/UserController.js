const { User } = require('../models')
const { Op, literal, fn, col  } = require('sequelize')
const fileName = "UserController.js"
const report = {fileName}
const log = (report) => console.log(`Request arrived in ${$fileName} => controller function: `)

// ${report.m} => carrying payload: `, report.p)


const CreateUser = async (req, res) => {
    log(file, this, req)
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
const DeleteUser = async (req,res) => {
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
    } catch(error) {
        throw error 
    }
} 
const ReadUser = async (req, res) => {
    try {
      let userId = parseInt(req.params.user_id)
      console.log(userId)
      let user = await User.findByPk(userId)
      console.log(user)
      res.send(user)
    } catch (error) {
      throw error
    }
  }
 
module.exports = {
    CreateUser,
    ReadUser,
    DeleteUser,
}
