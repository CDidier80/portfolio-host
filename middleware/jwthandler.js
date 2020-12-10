// DO NOT PUT SENSITIVE INFORMATION IN JWT. TOKENS CAN BE DECIPHERED EASILY ONLINE
const jwt = require('jsonwebtoken')
require('dotenv').config()   // indicates use of .env

// the secret key and number of salt rounds are stored privately in .env
const secretKey = process.env.APP_SECRET

const createToken = (req,res) =>{
try {
    console.log('LOG: jwthandler.js --> createToken() called --> attempt to sign token and add to res.locals.payload.')
    const token = jwt.sign(res.locals.payload, secretKey)
    console.log('LOG: jwthandler.js --> token created and added to locals payload --> response sent to UserService with payload & token.')
    res.send({user: res.locals.payload, token})
} catch (error) {
    console.log("TRY{}CATCH{} ERROR:  FILE: jwthandler.js  FUNCTION: createToken() MESSAGE: ", console.log(error))
}

}


// The below two functions are called only once by UserRouter.js in it's refresh-session get request
// To refresh the session, we must 1) get the token, 2) verify the token, and 3 refresh the session
// In UserRouter.js code: Router.get('/UserControllerJs/refresh/session/', getToken, verifyToken, UserController.RefreshSession)

const getToken = (req, res, next) => {
    // by default, tokens come in the form of a string "bearer 895edlgjs8j594eg"
    // we need just the sequence of characters, not the word bearer
    // the bearer-token is found in our req.headers (all requests have headers, some default others added by you)
    // The key is "authorization". All together it looks like {authorization: "bearer lakdjglkajdsklglk4"}
    // The below split separates the word "bearer" into a separate string from token "alksndgoiu137q6skxjfhsg" 
    const token = req.headers.authorization.split(' ')[1]  // separate them at the space
    // example "Bearer 87nfkajhjhgd76947dt928"  --- >   "Bearer"   "87nfkajhjhgd76947dt928"
    // Store the token as a new key:value pair in res.locals
    token ? (res.locals.token = token) : (res.locals.token = null) // locals exist along the back-end routes within .res - > response sent. 
    next() // move on to verify token
}

const verifyToken = (req,res,next) => {
    let token = res.locals.token // snag the token out of res.locals again and re-store it in the local variable "token"
    // the token is verified against the user's secret key
    jwt.verify(token, secretKey, (err, tkn) => {
    if(err){
        return res.status(401).json({msg: 'Unauthorized'})  // the cause of the error is an invalid token
    }})
    return next() // move on to RefreshSession() in UserController.js
}



module.exports = {
    createToken, 
    verifyToken, 
    getToken
}