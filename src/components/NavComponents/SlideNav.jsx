import React from 'react'
import './SlideNav.css'
import {Link} from 'react-router-dom'

export const SlideNav = (props) => {

    const toggleNav = (props.toggleNav)

    const toggleClass = (toggleNav) ?  "slide-nav" :  "slide-nav-negative" 

    return (
      <div>
        <div className={toggleClass} >
             <ul className="nav-list2">
                <Link to='/components/Main'>
                    <li>Main</li>
                </Link>
                <Link to='/components/EconomicHistory'>
                    <li>EconHist</li>
                </Link>
            </ul>
            
        </div>
     </div>     
    )
}

export default SlideNav
