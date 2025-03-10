const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    createdBy: {
        type: String,
        required: true
    },
    caption: {
        type: String,
    },
    likes: {
        type: [String],  
    },
    images: {
        type: String,
        required: true
    }

}, {
    timestamps: true,
})

module.exports = mongoose.model('post', postSchema)