import axios from 'axios';

//Specify URL pointing to our backend
const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);