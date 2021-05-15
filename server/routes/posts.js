import express from 'express';

//Named imports instead of default imports used
import {getPosts, createPost} from '../controllers/posts.js';

//Setup router
const router = express.Router();

//Add routes
//Prefix of /posts added
router.get('/', getPosts);
router.post('/', createPost);

export default router;