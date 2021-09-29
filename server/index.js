import express, { application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json({limit: "20mb", extended:true}));
app.use(express.urlencoded({ extended: true}))

app.use(cors());

const CONNECTION_URL = "mongodb+srv://MLWeb:<password>@pgs.qkqxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"