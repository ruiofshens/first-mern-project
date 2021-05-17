import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
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
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {/* For every Post component, create a respective Grid component */}
                {posts.map((post) => (
                    <Grid key={post.id} item xs={12} sm={6}>
                        <Post post={post}/>
                    </Grid> 
                ))}
            </Grid>
        )
    );
}

export default Posts;