import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'

export const Nav = () => {
    return (
        <nav>
            <ul className="nav-list">
                <Link to='/components/Main'>
                    <li>Main</li>
                </Link>
                <Link to='/components/EconomicHistory'>
                    <li>EconHist</li>
                </Link>
                <Link to='/components/Partidas'>
                    <li>Partidas</li>
                </Link>
                <Link to='/components/Social'>
                    <li>Social</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav