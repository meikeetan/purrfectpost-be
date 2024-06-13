const express = require('express')
const router = express.Router()
const { createNewPost } = require('../controllers/postController')

router.post('/', createNewPost)

module.exports = router