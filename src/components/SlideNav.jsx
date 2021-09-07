import React from 'react'
import './SlideNav.css'
import {Link} from 'react-router-dom'

export const SlideNav = () => {
    return (
        <div className="slide-nav">
             <ul className="nav-list2">
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
            
        </div>
    )
}

export default SlideNav
