import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
//A reducer takes in a state and an action, does some logic and returns a state

//Based on the action, return the appropiate state
//State needs to have a default value assigned, use an empty array
export default (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
            //If updated post and original post have the same ID, return newly updated post, otherwise return original post
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case FETCH_ALL:
            //Posts that has been retrieved from backend (look at actions/posts.js)
            return action.payload; 
        case CREATE:
            //Spread the posts, and add a new post which is stored in the payload
            return [...posts, action.payload]; 
        default:
            return posts;
    }
}


