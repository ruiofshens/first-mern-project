import React from 'react';
import {useSelector} from 'react-redux'; //Allow retrieving of data from the global redux store

//Import components required
import Post from './Post/Post';

//Import styling (done through makeStyles in Material-UI, refer to Posts/styles.js)
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts); //Access the state and retrieve the posts
    const classes = useStyles(); //Retrieves styling for Posts.js
    console.log(posts);
    
    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;