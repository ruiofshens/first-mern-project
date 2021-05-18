import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

//Import styling (done through makeStyles in Material-UI, refer to Form/styles.js)
import useStyles from './styles';

//Redux functionality
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    
    //Define postData through useState
    const[ postData, setPostData ] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile:'' //Image for the post
    });

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles(); //Retrieves styling for Form.js

    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);

    //Dispatch the createPost action
    const handleSubmit = (e) => {
        e.preventDefault(); //To not get refresh event in the browser

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();
    };

    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '', title: '', message: '', tags: '', selectedFile:'' //Image for the post
        });
    };

    //CSS-in-JS styling used through Material-UI
    return (
        <Paper className={classes.paper}>
            {/* form component takes multiple classes, use template literals */}
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{ currentId ? 'Editing' :  'Creating' } a Memory</Typography>
            {/* Spread operator used for setPostData, spreads the postData to only change specific property in postData  */}
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})}/>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}/>
            <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}/>
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value})}/>
            {/* Destructuring operator used for onDone, retrieves the base64 */}
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData, selectedFile: base64})}/></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;