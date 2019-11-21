import React from 'react';
import reactDOM from 'react-dom';
import App from './components/app';
import rootReducer from './reducers'

import { createStore } from 'redux'
import { Provider } from 'react-redux';

import { addCharactersById } from './actions'

const store = createStore(rootReducer)
console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
store.dispatch(addCharactersById(2))

reactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));


    // steps in index.js for store 
    // 1. import createStore, Provider rootReducer from redux, react-redux and reducers respectively
    // 2. create the store with createStore and wrap the root reducers
    // 2. wrap the app with provider tag