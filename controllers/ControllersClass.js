const { response } = require("express")
const { Model } = require("sequelize")

class EqualizeMySequelize {
    constructor(Model, Fields) {

    }
    getOneBy = async (req, res) => {
        try {
            const result = await Model.findOne({})
            res.send(response) 
        } catch (error) {
            console.log(error)
        }

    }
    getManyBy = (req, res) => {
        const result = await Model.findAll({})
        res.send(response)
    }

    getManyByField = (req, res) => {
        const fieldValue = req.params.someValue
        const fieldName = this.Fields[fieldValue]
        const result = await Model.findAll({
            where: {
                fieldName : fieldValue
            }
        })
        res.send(response)
    }

    getOneById = (req, res) => {
        const result = await Model.findByPk({})
        res.send(response)
    }

    getOneWhere = (req, res) => {
        const result = await Model.findOne({})
        res.send(response)
    }

    createOne = (req, res) => {
        const result = await Model.create({})
        res.send(response)
    }

    createMany = (req, res) => {
        const result = await Model.createMany({})
        res.send(response)
    }

    updateOneById = (req, res) => {
        const result = await Model.findOne({})
        res.send(response)
    }

    updateOneWhere = (req, res) => {
        const result = await Model.findOne({})
        res.send(response)
    }

    updateManyWhere = (req, res) => {
        const result = await Model.findOne({})
        res.send(response)
    }

    delOne = (req, res) => {
        const fieldToDeleteBy = req.params.anything
        const fieldValue = req.body.someValue
        const result = await Model.destroy({
            where: {
                fieldToDeleteBy: req.body.someValue
            }
        })
        res.send(response)
    }

    delOneById = (req, res) => {
        const result = await Model.findOne({})
        res.send(response)
    }

    delMany = (req, res) => {
        const result = await Model.findOne({})
        res.send(response)
    }

    delManyBy = (req, res) => {
        const result = await Model.findOne({})
        res.send(response)
    }
    delManyAll = (req, res) => {
        const result = await Model.findOne({})
        res.send(response)
    }

}

let projectFields = ["title", "description"]
let userFields = ["name", "email", "password"]
let profileFields = ["linkedin",]

const Projects = new EqualizeMySequelize("Projects", projectFields)
const User = new EqualizeMySequelize("Projects", userFields)
const Profile = new EqualizeMySequelize("Projects", profileFields)



module.exports = {
    Projects,
    User,
    Profile
}


