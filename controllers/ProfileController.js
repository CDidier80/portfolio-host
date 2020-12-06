const { User, Profile } = require('../models')
const { Op, literal, fn, col } = require('sequelize')
// const { Helpers } = require('../Helpers')
// const { valueIfExists } = Helpers

// console.log('1', valueIfExists(, 'not exist'))
// const log = Helpers.ControllerLoggers.ProfileControllerLog

const CreateProfile = async (req, res) => {
    // log(this, req)
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
        res.status(401).send({ msg: "only one profile" })
        throw error
    }
}
const UpdateProfile = async (req, res) => {
    try {
        let profileId = parseInt(req.params.profile_id)
        let updatedProfile = await Profile.update(req.body, {
            where: {
                id: profileId
            },
            returning: true
        })
        res.send(updatedProfile)
    } catch (error) {
        throw error
    }
}
const ReadProfile = async (req, res) => {
    try {
        let profileId = parseInt(req.params.profile_id)
        let profile = await Profile.findByPk(profileId)
        res.send(profile)
    } catch (error) {
        throw error
    }
}
const ReadAllProfiles = async (req, res) => {
    try {
        const allProfiles = await Profile.findAll()
        res.send(allProfiles)
    } catch (error) {
        throw error
    }
}
module.exports = {
    CreateProfile,
    UpdateProfile,
    ReadProfile,
    ReadAllProfiles
}