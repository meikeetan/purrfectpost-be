const Post = require('../models/postModel')

// Create New Post
async function createNewPost (req, res) {
    const {createdBy, caption, images} = req.body
    const post = await Post.create({
        createdBy,
        caption,
        images
    })
    return res.status(201).json(post)
}


// Get all posts created by that particular id 
async function getUserPosts(req, res) {
    const id = req.params.id
    try {
      const postings = await Post.find({ createdBy: id});
      return res.status(200).json(postings);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  // Get all posts (in database)
  async function getAllPosts(req, res) {
    try {
      const allPosts = await Post.find({});
      return res.status(200).json(allPosts);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  // Delete Post
  async function deletePost(req, res) {
    try {
      const {id} = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  // Update Post
  async function updatePost(req, res) {
    try {
      const { id } = req.params;
    const updatedPost = await Post.findByIdAndUpdate(
      id.trim(), 
      req.body,
      { new: true }
      );
      res.status(200).json(updatedPost);
      
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  // Update Likes
  async function updateLikes(req, res) {
    const postId = req.params.id; // assuming you're passing the post ID as a parameter
    const userId = req.body.id; // assuming you're using authentication and have access to the user's ID
  
    const postToUpdate = await Post.findOne({_id: postId});
    console.log(postToUpdate)
    if (!postToUpdate) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    const likes = postToUpdate.likes;
    const userAlreadyLiked = likes.includes(userId);
  
    if (userAlreadyLiked) {
      // remove user from likes array
      postToUpdate.likes = likes.filter((id) => id!== userId);
    } else {
      // add user to likes array
      postToUpdate.likes.push(userId);
    }
  
    await postToUpdate.save();
  
    res.json({ message: 'Likes updated successfully' });
  }

module.exports = {
    createNewPost,
    getUserPosts,
    getAllPosts,
    deletePost,
    updatePost,
    updateLikes,
}

