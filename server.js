const AppRouter = require('./backend/routes/AppRouter')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('morgan')

// import express & create a server instance
const app = require('express')()
const PORT = process.env.PORT || 5001

//Initialize Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(helmet())
app.use(cors())
app.disable('X-Powered-By') 

// Test Route
app.get('/', (req, res) => res.json({ message: 'Server Works' }))
// ApiClient.js meets Server.Js at '/api' & sends requests to AppRouter
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))