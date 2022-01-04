
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