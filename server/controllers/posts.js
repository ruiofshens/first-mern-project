//Handlers for the routes
//Keep the code for the routes shorter by shifting the handlers to this seperate file

//Import models
import PostMessage from '../models/postMessage.js';

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