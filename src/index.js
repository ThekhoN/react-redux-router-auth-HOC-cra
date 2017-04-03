import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import RouterComponent from './router';

ReactDOM.render(
  <Provider store={ store }>
    <RouterComponent/>
  </Provider>,
  document.getElementById('root')
);
