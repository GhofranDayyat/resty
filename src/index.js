import React from 'react';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import ReactDOM from 'react-dom';

function Main(props) {
    return (
        <BrowserRouter>
            <Header/>
            <App/>  
            <Footer/>
        </BrowserRouter>
    )
}



ReactDOM.render(
  <React.StrictMode>
      <Main/>
  </React.StrictMode>
, document.getElementById('root1'));
export default Main;