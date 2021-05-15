import * as api from '../api'; 

//Action Creators are functions that return an action
//Use redux-thunk as async data is used
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts(); //Retrieve data from the backend
        dispatch({type: 'FETCH_ALL', payload: data}) //Dispatch the action
    } catch(error){
        console.log(error.message);
    }
}