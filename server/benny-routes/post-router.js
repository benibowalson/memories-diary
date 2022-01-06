
import express from 'express'
import { createPost, getPosts, updatePost, deletePost, likePost } from '../benny-controllers/post-controller.js'
const postRouter = express.Router()

postRouter.get('/', getPosts)
postRouter.post('/', createPost)
postRouter.patch('/:id', updatePost)
postRouter.delete('/:id', deletePost)
postRouter.patch('/:id/likePost', likePost)

export default postRouter