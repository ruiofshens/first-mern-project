/* Helper function, turns different reducing functions into a 
single reducing function to be passed to createStore */
import {combineReducers} from 'redux'; 
import posts from './posts';

//index.js in src folder imports this for creating the store
export default combineReducers({posts});