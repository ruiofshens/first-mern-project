import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

//General Setup
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors()); //Middleware that allows access of resources from remote hosts

//Use Express middleware
//First parameter is the starting path for all routes
app.use('/posts', postRoutes);

//Heroku will automatically populate process.env.PORT
const PORT = process.env.PORT || 5000;

//Connect to database
//If connection successful, call app.listen
//If connection unsuccessful, log error
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

