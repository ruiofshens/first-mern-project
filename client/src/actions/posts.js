import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api'; //Imports API calls used in the action creators

//Action Creators are functions that return an action
//Each creator uses redux-thunk as async data is used

//Retrieve current posts
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts(); //Retrieve data from the backend
        dispatch({type: FETCH_ALL, payload: data}) //Dispatch the action
    } catch(error){
        console.log(error.message);
    }
}

//Create a post
export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

//Update current post details
export const updatePost = (id, post) => async(dispatch) => {
    try {
        //Destructure the response to retrieve data only
        const { data } = await api.updatePost(id, post);
        dispatch({type: UPDATE, payload: data});
    } catch(error) {
        console.log(error);
    }
}

//Delete existing post
export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });
    } catch(error) {
        console.log(error);
    }
}

//Like existing post
export const likePost = (id) => async(dispatch) => {
    try {
        //Destructure the response to retrieve data only
        const { data } = await api.likePost(id);
        dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}