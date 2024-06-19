const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000
const cors = require('cors');
const uploadRoute = require('./controllers/uploadController')

// Connect to database
connectDB()

const app = express()
app.use(cors({
    //change this origin shit every time i change my FE link
    origin: ['http://localhost:3000', 'https://purrfectpost-fe.vercel.app'],
    credentials: true
  }));
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/post', require('./routes/postRoutes'));
app.use('/api/upload', uploadRoute)

// Error handler middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))