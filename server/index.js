// https://youtu.be/ngc9gnGgUdA?t=1248

import dotenv from 'dotenv'
dotenv.config()

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();

// Routes
import postRoutes from './routes/posts.js'

const USER = process.env.USER
const PASS = process.env.PASSWORD

app.use('/posts', postRoutes)

app.use(express.json({limit: "20mb", extended:true}));
app.use(express.urlencoded({ extended: true}))
app.use(cors());

const CONNECTION_URL = `mongodb+srv://${USER}:${PASS}@pgs.qkqxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error)=> console.log(error.message))

