import React, {useState, useEffect} from 'react';
import './Nav.css';
import './SlideNav.css';
import {Link} from 'react-router-dom'


export const Nav = () => {

        const [toggle, setToggle] = useState (false)
        

        useEffect(()=>{
          console.log(toggle) 
        });

        const toggleState = () => {
            setToggle(!toggle)
        }

    return (
        <nav>

            <button onClick={toggleState }>hola</button>

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