//Handlers for the routes
//Keep the code for the routes shorter by shifting the handlers to this seperate file

//Import models
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

//res.json() is Express.js function that sends a JSON response

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find(); //Finding something in a model is async

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save(); //Saving is async   

        res.status(201).json(newPost);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async(req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    //If invalid ID
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    
    //If valid ID
    //Spread operator used to add the id to the post object
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true }); //Updating is async 

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    //If invalid ID
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    //If valid ID, delete post
    await PostMessage.findByIdAndRemove(id); //Deleting is async 

    res.json({ message: 'Post deleted successfully' });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    //If invalid ID
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    //If valid ID, find the respective post
    //Create the new updated post with like count incremented
    const post = await PostMessage.findById(id); //Finding post is async 
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new : true}); //Liking post is async 

    res.json(updatedPost);
}