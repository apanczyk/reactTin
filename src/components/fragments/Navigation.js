import React from 'react';
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/" >Strona główna</Link></li>
                <li><Link to="/visitors" >Gość</Link></li>
                <li><Link to="/meals" >Danie</Link></li>
                <li><Link to="/reviews" >Recenzja</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation