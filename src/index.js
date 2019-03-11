import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './polyfills'
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  (
    <StrictMode>
      <Root />
    </StrictMode>
  ),
  document.getElementById('root'));

window.ReactDOM = ReactDOM;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
