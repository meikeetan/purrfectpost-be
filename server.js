const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000
const cors = require('cors');

// Connect to database
connectDB()

const app = express()
app.use(cors({
    //change this origin shit every time i change my FE link
    origin: ['http://localhost:3002'],
    credentials: true
  }));
app.use(express.json())
app.use(express.urlencoded({extended: false}))


  
  app.get('/', (req, res) => {
    res.send('Hello');
  });

// Routes
app.use('/api/users', require('./routes/userRoutes'));

app.post('/api/users/signup', (req, res) => {
    // Handle signup logic here
    res.json({ token: 'ome-token' });
  });

// Error handler middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))