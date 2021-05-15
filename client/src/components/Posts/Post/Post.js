import React from 'react';

//Import styling (done through makeStyles in Material-UI, refer to Post/styles.js)
import useStyles from './styles';

const Post = () => {
    const classes = useStyles(); //Retrieves styling for Post.js
    
    return (
        <h1>POST</h1>
    );
}

export default Post;