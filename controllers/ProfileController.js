const { User, Profile } = require('../models')
const { Op, literal, fn, col } = require('sequelize')
const Helpers = require('../Helpers')
const showLogs = true
const log = Helpers.ControllerLoggers.ProfileControllerLog
const CreateProfile = async (req, res) => {
    log(this, req)
    try {
        let userId = parseInt(req.params.user_id)
        let profileBody = {
            userId,
            ...req.body
        }
        console.log('pro body', profileBody)
        let profile = await Profile.create(profileBody)
        res.send(profile)
    } catch (error) {
        res.status(401).send({ msg: "only one profile"})
        throw error
    }
}
module.exports = {
    CreateProfile,
}