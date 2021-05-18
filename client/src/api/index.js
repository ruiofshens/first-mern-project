import axios from 'axios'; //Promise-based HTTP client

//Specify URL pointing to our backend
const url = "http://localhost:5000/posts";

//Fetch current posts using GET request
export const fetchPosts = () => axios.get(url);

//Create post through sending POST request
export const createPost = (newPost) => axios.post(url, newPost); 

//Update post through sending PATCH request
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

//Update post through sending DELETE request
export const deletePost = (id) => axios.delete(`${url}/${id}`);

//Update post through sending PATCH request
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)