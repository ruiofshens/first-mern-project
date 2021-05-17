import React from 'react';
import ReactDOM from 'react-dom';

//Redux Functionality
import {Provider} from 'react-redux'; //Makes the Redux store available to any nested components
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'; //Middleware that looks at every action passed through, if it's a function it is called
import reducers from './reducers';

import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

//Provider rendered at top level, with the entire app's component tree inside of it
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);