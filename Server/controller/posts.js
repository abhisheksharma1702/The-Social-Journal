
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    }
    catch(err){
        res.status(404).json({message: error.message});
    }
};

export const createPost = async (req,res) => {

    const post = req.body;

    try{
        await newPost.save();

        res.status(201).json(newPost);
    }
    catch(err){
        res.status(409).json({message: error.message});
    }
};