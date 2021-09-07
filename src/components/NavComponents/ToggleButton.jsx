import React, {useState, useEffect} from 'react'
// import SlideNav from './SlideNav';

export const ToggleButton = () => {

    const [toggle, setToggle] = useState (false)
        

    useEffect(()=>{
      console.log(toggle) 
    });

    const toggleState = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <div><button onClick={toggleState } className="toggle">hola !!!!</button> </div>
            

            {/* <SlideNav toggleNav ={toggle}/>  */}
           
            
            
        </div>
    )
}

export default ToggleButton
