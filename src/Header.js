import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';



const Header = () =>{
    return(
        <header>
                               
                <ul>
                    <nav>
                        <li>
                            <h1>RESTy</h1> 
                        </li>
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
                </ul>             
        </header>
    )
}

export default Header;