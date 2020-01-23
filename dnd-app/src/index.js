// Firstly we need to import provider, logger, thunk createStore, applyMiddleware from the respective dependencies
// Wrap our <App /> in <Provider> and pass store to Provider
// Create our store -- pass in our reducer and applyMiddleware with thunk and logger passed into applyMiddleware -- 

// dependency imports
import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'

import './index.css';
import App from './App';
import { reducer } from './reducers';

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
