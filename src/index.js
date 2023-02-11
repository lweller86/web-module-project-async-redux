import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';

import { Provider } from 'react-redux';
import { reducer } from './Reducers';
import thunk from 'redux-thunk';
 
import App from './App';
import './index.css';



const store = createStore(reducer,  compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
