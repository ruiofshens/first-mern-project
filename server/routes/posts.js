import express from 'express';

//Named imports instead of default imports used
import { getPosts, createPost, updatePost } from '../controllers/posts.js';

//Setup router
const router = express.Router();

//Add routes
//Prefix of /posts added
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);

export default router;