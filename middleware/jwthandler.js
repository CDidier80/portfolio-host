// DO NOT PUT SENSITIVE INFORMATION IN JWT. TOKENS CAN BE DECIPHERED EASILY ONLINE
const jwt = require('jsonwebtoken')
require('dotenv').config()   // indicates use of .env

// the secret key and number of salt rounds are stored privately in .env
const secretKey = process.env.APP_KEY

const createToken = (payload) => {
    try {
        let token = jwt.sign(payload, secretKey)
        return token
    } catch (error) {
        console.log("TRY{}CATCH{} ERROR:  FILE: jwthandler.js  FUNCTION: createToken() MESSAGE: ", console.log(error))
    }

}

const getToken = (req, res, next) => {
    let token = req.headers.authorization.split(' ')[1]  // separate them at the space

    token ? (res.locals.token = token) : (res.locals.token = null) // locals exist along the back-end routes within .res - > response sent. 

    next() // move on to verify token
}

const verifyToken = (req, res, next) => {
    const { token } = res.locals
    let valid = jwt.verify(token, secretKey)
    if (valid) {
        res.locals.token = valid
        return next()
    }
    res.status(401).send({ message: 'Unauthorized', status: 'error' })
}

module.exports = {
    createToken,
    verifyToken,
    getToken
}