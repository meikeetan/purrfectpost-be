const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

// @desc   Register a new user
// @route  /api/users
// @access Public
const registerUser = async (req, res) => {
    const {name, email, password} = req.body

    // Validation
    if(!name || !email || !password){
        res.status(400).json({ error: 'Please include all fields' })
        return
    }

    // Find if user already exists
    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400).json({ error: 'User already exists' })
        return
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json({ error: 'Invalid user data' })
    }
}

// @desc   Login a new user
// @route  /api/users/login
// @access Public
const loginUser = async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    // Check user and passwords match
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
    })
} else {
    res.status(401).json({ error: 'Invalid credentials' })
}}

// @desc   Get current user
// @route  /api/users/me
// @access Private
const getMe = async(req, res) => {
    const token = req.headers.authorization.split(' ')[1] // Get token from header
    const decoded = jwt.verify(token, process.env.JWT_SECRET) // Verify token
    req.user= await User.findById(decoded.id) // Get user from token
    
    const user = {
        id: req.user._id,
        email: req.user.email,
        name: req.user.name,
    }
    
    res.status(200).json(user)
}

// Generate token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}