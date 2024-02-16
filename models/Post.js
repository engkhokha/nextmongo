const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    details: String,
    user: String,
    age: Number
});

// Define or retrieve the "Post" model
const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
