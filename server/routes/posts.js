import express from 'express';

//Named imports instead of default imports used
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

//Setup router
const router = express.Router();

//Add routes
//Prefix of /posts added
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost); //Liking a post updates the number of likes

export default router;