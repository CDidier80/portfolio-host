const { User, Profile } = require('../models')
const { Op, literal, fn, col } = require('sequelize')
const  { valueIfExists: checkPayload, ControllerLoggers }  = require('../Helpers')
const log = ControllerLoggers.ProfileControllerLog
const showLogs = true


const CreateProfile = async (req, res) => {
    log(CreateProfile, req, checkPayload, showLogs)
    try {
        let userId = req.params.user_id
        let profileBody = {
            userId,
            ...req.body
        }
        let profile = await Profile.create(profileBody)
        res.send(profile)
    } catch (error) {
        res.status(401).send({ msg: "only one profile" })
        throw error
    }
}

const UpdateProfile = async (req, res) => {
    log(UpdateProfile, req, checkPayload, showLogs)
    try {
        let profileId = req.params.profile_id
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
    log(ReadProfile, req, checkPayload, showLogs)
    try {
        let profileId = req.params.profile_id
        let profile = await Profile.findByPk(profileId)
        res.send(profile)
    } catch (error) {
        throw error
    }
}
const ReadAllProfiles = async (req, res) => {
    log(ReadAllProfiles, req, checkPayload, showLogs)
    try {
        const allProfiles = await Profile.findAll()
        console.log(allProfiles)
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