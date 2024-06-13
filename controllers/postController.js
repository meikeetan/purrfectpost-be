const jwt = require('jsonwebtoken')

const Post = require('../models/postModel')
// @desc Create a new post 
// @route /api/newpost

const createNewPost = async (req, res) => {
    const {createdBy, caption, imgUrl} = req.body

    // Create New Post 
    const post = await Post.create({
        createdBy,
        caption,
        imgUrl
    })
    return res.status(201).json(post)
}

module.exports = {
    createNewPost
}

