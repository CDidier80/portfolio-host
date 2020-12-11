const path = require('path')
const AppRouter = require('./routes/AppRouter')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('morgan')

// import express & create a server instance
const app = require('express')()
const PORT = process.env.PORT || 3001

//Initialize Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))
// app.use(helmet())   ok in development
app.use(helmet({ contentSecurityPolicy: false }))   // for deployment
app.use(cors())
app.disable('X-Powered-By') 
app.use(express.static(path.join(__dirname, 'client', 'build')))   // for deployment

app.use('/api', AppRouter)

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))