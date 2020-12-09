const AppRouter = require('./routes/AppRouter')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('morgan')

const { cloudinary } = require('')


// import express & create a server instance
const app = require('express')()
const PORT = process.env.PORT || 3001

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
<<<<<<< HEAD


app.get('/api/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:dev_setups')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});
app.post('/api/upload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dev_setups',
        });
        console.log(uploadResponse);
        res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});







app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
=======
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
>>>>>>> f48d43021353c76f8f66f36b6a862f3e85cdeb1b
