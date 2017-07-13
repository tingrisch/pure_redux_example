// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
     


import { createStore } from "redux";

// Reducer function
//      - responsible for handling the action
//      - returns the new state for the application
//      - takes 2 arguments: the state and the action
//      - always has to return a state
const reducer = (state, action) => {
    switch(action.type) {
        case "ADD":
            state = state + action.payload;
            break;
        case "SUBTRAKT":
            state = state - action.payload;
            break;    
    }

    return state;
};

// creates a store
// createStore function 
//      - takes 2 arguments: the reduce function and the state to store
//      - the store knows therfore who is handling the new state (the reducer) and the initial state
const store = createStore(reducer, 1);

// is called every time the store is updated
store.subscribe(() => {
    console.log("store updated", store.getState());
});

// sends the new action to the store
// in other words: hey store here is a new action
store.dispatch({
    type: "ADD",
    payload: 1
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "SUBTRAKT",
    payload: 10
});