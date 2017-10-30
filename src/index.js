import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import { BasePage } from './components/basePage';
import basePage from './components/basePage/reducer';

let store = createStore(basePage);

ReactDOM.render(
  <Provider store={store}>
    <BasePage/>
  </Provider>,
  document.getElementById('root')
);