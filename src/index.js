import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import {Provider} from 'react-redux'
import { rootReducer } from './Redux/rootReducer';
import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


