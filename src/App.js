import React from 'react';
import {BrowserRouter, HashRouter} from 'react-router-dom'; // react support hash route also 
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

function App(props) {
    return (
        <BrowserRouter>
            <Header/>
            <Home/>  
            <Footer/>
        </BrowserRouter>
    )
}

export default App;