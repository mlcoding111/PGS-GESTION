import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();

// Variables
const USER = process.env.USER
const PASS = process.env.PASSWORD
const CONNECTION_URL = `mongodb+srv://${USER}:${PASS}@pgs.qkqxy.mongodb.net/datas?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000;

// Routes import
import postRoutes from './routes/posts.js'

import dossiersRoutes from './routes/dossiers.js'
import facturationsRoutes from './routes/facturations.js'
import employersRoutes from './routes/employers.js'
import paiementsRoutes from './routes/paiements.js'


// Those lines need to be above the routes to avoid any network cors error
app.use(express.json({limit: "20mb", extended:true}));
app.use(express.urlencoded({ extended: true}))
app.use(cors());

//Routes 
app.use('/posts', postRoutes)

app.use('/dossiers', dossiersRoutes)
app.use('/facturations', facturationsRoutes)
app.use('/paiements', paiementsRoutes)
app.use('/employers', employersRoutes)

// Connect to database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error)=> console.log(error.message))

