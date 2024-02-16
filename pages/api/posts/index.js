import dbConnect from "@/Ultis/dbConnect"
import Post from "@/models/Post"
import nc from "next-connect";

// Connect to the database
dbConnect();

// Create a next-connect handler
const handler = nc();

// Define the route handler for GET requests
handler.get(async (req, res) => {
    try {
        // Retrieve all posts from the database
        const posts = await Post.find({});
        // Send the retrieved posts as the response
        res.send(posts);
    } catch (error) {
        // If an error occurs, send an error response
        return res.status(400).json({ message: 'Sorry, something went wrong!' });
    }
});

// Define the route handler for POST requests
handler.post(async (req, res) => {
    // Extract post data from the request body
    const { title, details, user, age } = req.body;
    
    // Create a new post instance
    const newPost = new Post({ title, details, user, age });

    try {
        // Save the new post to the database
        await newPost.save();
        // Send a success response
        res.send('New post added!');
    } catch (error) {
        // If an error occurs, send an error response
        return res.status(400).json({ message: 'Sorry, something went wrong!' });
    }
});

// Export the handler
export default handler;