
import express from 'express'
import { createPost, getPosts } from '../benny-controllers/post-controller.js'
const postRouter = express.Router()

postRouter.get('/', getPosts)
postRouter.post('/', createPost)

export default postRouter