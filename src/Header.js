import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';



const Header = () =>{
    return(
        <header>
            <h1>RESTy</h1>
          
            <h1>
                <nav>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="history">History</Link>
                    </li>
                    <li>
                        <Link to="help">Help</Link>
                    </li>
                </nav>
            </h1>
       
        </header>
    )
}

export default Header;