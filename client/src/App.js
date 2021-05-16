import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'; //Uses Material-UI, a React component library

//Redux Functionality
import {useDispatch} from 'react-redux'; //Imports useDispatch hook from Redux, allows us to dispatch an action
import {getPosts} from './actions/posts'; //Imports actions

//Import components used
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

//Import images and styling (done through makeStyles in Material-UI, refer to src/styles.js )
import memories from './images/memories.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles(); //Retrieves styling for App.js
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts()); //getPosts action to be dispatched
    },[dispatch]);

    //Grow component: For animation, internally uses react-transition-group
    return (
        <Container maxwidth="lg">
            <AppBar className = {classes.appBar} position="static" color="inherit">
                <Typography className = {classes.heading} variant="h2" align="center">Memories</Typography>
                <img className = {classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;