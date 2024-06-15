const express = require('express')
const router = express.Router()
const { createNewPost, getUserPosts, getAllPosts, deletePost, updatePost } = require('../controllers/postController')

router.post('/create', createNewPost)
router.get('/:id', getUserPosts)
router.get('/', getAllPosts)
router.delete('/delete/:id', deletePost)
router.put('/update/:id', updatePost)


module.exports = router