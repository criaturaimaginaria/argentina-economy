
import React from 'react';
import  "./Partidas.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart, fill } from 'recharts';



export const Partidas = () => {

  
    let chartYears = []
    let inflation = [9,-1,8,-3,0,8,4,2,4,1,
        4,-1,1,0,8,10,15,25,-8,-8,
        25,-10,-15,0,1,-1,-1,0,0,1,
        1,-14,-10,11,-11,5,8,4,0,1,
        2,3,5,6,1,0,20,19,30,25,
        30,40,49,5,5,10]



const historicInflation = ()=>{
     let year = 1900
       for (let i = 0; i < 56; i++){   
        chartYears.push({
            year: year + i,
            inflation: inflation[i]
        })
    } 
} 

historicInflation() 
// historicInflation(console.log(chartYears)) 


    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: -2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div className="Partidas">
            
          <h1>120 años de história inflacionaria de la república Argentina </h1>

           <h2>1900 - 1955</h2>

            <div className="chart1"> 
                <ResponsiveContainer width="100%" aspect={2}>
                    <AreaChart
                    
                        width={500}
                        height={300}
                        data={chartYears}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        > 
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        
                        <YAxis />
                        <Area type="monotone" dataKey="uv" stroke="black" fill="black" />
                        <Tooltip />
                        <Legend />
                        {/* <Area fill="#8884d8" /> */}
                        <Area  type="monotone" dataKey="inflation" stroke="blue"  fill="red"/>
                        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                    
                    </AreaChart>
                </ResponsiveContainer>
            </div>       
        </div>
    )
}

export default Partidas
