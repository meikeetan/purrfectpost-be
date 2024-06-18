const express = require('express')
const router = express.Router()
const { createNewPost, getUserPosts, getAllPosts, deletePost, updatePost, updateLikes } = require('../controllers/postController')

router.post('/create', createNewPost)
router.get('/me/:id', getUserPosts)
router.get('/', getAllPosts)
router.delete('/delete/:id', deletePost)
router.put('/update/:id', updatePost)
router.put('/updatelike/:id', updateLikes)


module.exports = router