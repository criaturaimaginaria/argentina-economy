import React, {useState, useEffect} from 'react';
import './Nav.css';
import './SlideNav.css';
import {Link} from 'react-router-dom'
// import ToggleButton from './ToggleButton.jsx'
import SlideNav from './SlideNav';


export const Nav = () => {

    

 
    const [toggle, setToggle] = useState (false)
    const [navScroll, setNavScroll] = useState    ("nav")

    const scrollColor = () =>{
        setNavScroll("navScroll")
    }

    useEffect(()=>{
        window.addEventListener("scroll", scrollColor)
        
        return () => window.removeEventListener("scroll", scrollColor)
    }, []);

console.log(navScroll)
    

    const toggleState = () => {
        setToggle(!toggle)
    }
     

    return (
        <nav className={navScroll}>

           
       <SlideNav toggleNav ={toggle} />
      <button onClick={toggleState } className="toggleButton" >hola !!ttt!!</button> 
        {/* <ToggleButton /> */}

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