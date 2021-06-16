import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter,HashRouter} from 'react-router-dom'
import Home from './Home'
import History from './History'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
, document.getElementById('root1'));