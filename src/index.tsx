
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import allReducers from './reducers/reducer-highlight';

const store = configureStore(allReducers);

ReactDOM.render( 
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);