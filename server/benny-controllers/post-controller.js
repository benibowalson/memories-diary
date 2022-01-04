
import mongoose from 'mongoose'
import PostModel from "../benny-models/postModel.js"

export const getPosts = async (req, res) => {
    try {
        const arrPosts = await PostModel.find()
        console.log("Posts_Srvr: ", arrPosts)
        res.status(200).json(arrPosts)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostModel(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)       //201: successful creation
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePost = async (req, res) => {
    const {id: _id } = req.params
    const myPost = req.body
    const editedPost = {...myPost, _id}

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

    const updatedPost = await PostModel.findByIdAndUpdate(_id, editedPost, { new: true})

    res.json(updatedPost)
}