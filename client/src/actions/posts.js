import * as api from '../api'; //Imports API calls used in the action creators

//Action Creators are functions that return an action

//Retrieve current posts
//Use redux-thunk as async data is used
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts(); //Retrieve data from the backend
        dispatch({type: 'FETCH_ALL', payload: data}) //Dispatch the action
    } catch(error){
        console.log(error.message);
    }
}

//Create a post
//Use redux-thunk as async data is used
export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}