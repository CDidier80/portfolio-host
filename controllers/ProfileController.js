const { User, Profile } = require('../models')
// const { Op, literal, fn, col } = require('sequelize')
const  { ControllerLoggers }  = require('../Helpers')
const log = ControllerLoggers.ProfileControllerLog, errorLog = ControllerLoggers.ProfileControllerErrorLog
const show = true

const CreateProfile = async (req, res) => {
    log(CreateProfile, req, show)
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
        errorLog(CreateProfile, error, show)
    }
}

const ReadProfile = async (req, res) => {
    log(ReadProfile, req, show)
    try {
        let profileId = parseInt(req.params.profile_id)
        let profile = await Profile.findByPk(profileId)
        res.send(profile)
    } catch (error) {
        errorLog(ReadProfile, error, show)
    }
}

// const ReadProfile = async (req, res) => {
//     log(ReadProfile, req, show)
//     try {
//         let profileId = req.params.profile_id
//         let profile = await Profile.findByPk(profileId)
//         res.send(profile)
//     } catch (error) {
//         errorLog(CreateProfile, error, show)
//     }
// }

const UpdateProfile = async (req, res) => {
    log(UpdateProfile, req, show)
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
        errorLog(UpdateProfile, error, show)
    }
}


const ReadAllProfiles = async (req, res) => {
    log(ReadAllProfiles, req, show)
    try {
        const allProfiles = await Profile.findAll()
        console.log(allProfiles)
        res.send(allProfiles)
    } catch (error) {
        // console.log("error:", error)
        // errorLog(ReadAllProfiles, error, show)
        null
    }
}

module.exports = {
    CreateProfile,
    UpdateProfile,
    ReadProfile,
    ReadAllProfiles
}

