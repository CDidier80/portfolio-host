const { User, Profile, sequelize } = require('../models')
// const { Op, literal, fn, col } = require('sequelize')
const { ControllerLoggers } = require('../Helpers')
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
    if (Profile.Rows === undefined) {
        res.send(false)
    }
    else {
        try {
            let profileId = parseInt(req.params.profile_id)
            let profile = await Profile.findByPk(profileId)
            let user = await User.findByPk(users)
            res.send(profile)
        } catch (error) {
            errorLog(ReadProfile, error, show)
        }
    }
}

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
// method to get all the profiles based on the limits set by user
const ReadAllProfiles = async (req, res) => {
    log(ReadAllProfiles, req, show)
    if (Profile.Rows === undefined) {
        res.send(false)
    }
    else {
        try {
            // limit brought by front end
            const { limit } = req.body
            // if needed to parse into int
            // limit = parseInt(limit)
            // const limit = 1
            const allProfiles = await Profile.findAll({
                limit: limit,
                include: [
                    {
                        model: User,
                        as: 'user'
                    }
                ]
            })
            res.send(allProfiles)
        }
        catch (error) {
            throw error
        }
    }
}

module.exports = {
    CreateProfile,
    UpdateProfile,
    ReadProfile,
    ReadAllProfiles
}

