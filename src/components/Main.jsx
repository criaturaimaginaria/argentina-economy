import React, {} from 'react'
import './Main.css'
import Card from './MainComponents/Card.jsx';
import Title from './MainComponents/Title.jsx';
import Card3 from './MainComponents/Card3.jsx';

export const Main = () => {


    return (
        <div className="main">

            <div className="title">
                <div className="content2">
                     Economic data 
                    <Title />
                </div>
                
            </div>
            
            <h1>Economía argentina</h1>

            <Card />

            <Card3 />

        </div>
    )
}

export default Main