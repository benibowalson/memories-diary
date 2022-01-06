import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import postRouter from './benny-routes/post-router.js'    //INCLUDE THE .js pls

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello! Welcome to Memories Diary!')
})
app.use('/posts', postRouter)

//const CONNECTION_URL = 'mongodb+srv://Benny:ymang01@cluster0.vcaqu.mongodb.net/Cluster0?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

const options_in_connect = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.CONNECTION_URL, options_in_connect)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err.message))

//mongoose.set('useFindAndModify', false);      //deprecated; don't use