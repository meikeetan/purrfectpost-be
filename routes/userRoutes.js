const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, updateUser} = require('../controllers/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me/:id', getMe)
router.put('/update/:id', updateUser)



module.exports = router