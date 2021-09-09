
import React, {useState} from 'react';
import  "./Partidas.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart, fill } from 'recharts';



export const Partidas = () => {

    const [firstMidCentury, setFirstMidCentury] = useState ([])
    let chartYears = []
    let inflation = [12 ,43,5,76,3,231,432,453,54,5,,5,5,5,5,5,5,,5,5,5,5,5,,5,5,5,5,5,5,5,5,,5,5,5,5,5,5,5,,5,5,55,43,54,35,43,543,5,4,54,54,5,,5,5,4,4,4,4,4,4,,4,4,4,4]
    let infl = []


const historicInflation = ()=>{
     let year = 1900
     let i = 0
       for (i ; i < 56; i++){ 
      
        chartYears.push({
            year: year + i,
            inflation: inflation[i]
        })
    } 
} 
// inflation.forEach(chartYears[infl].push(inflation))


// const historicInflation = ()=>{
//      let year = 1900
//        for (year; year < 1956; year++){ 
//         chartYears.push({
//             year: year,
//             inflations: infl[q].push(inflation)
//         })
//     } 
// } 

historicInflation(console.log(chartYears)) 


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
        <div>
            <h1>partidas</h1>

            <div className="partidas"> 
                <ResponsiveContainer width="100%" aspect={2}>
                    <LineChart
                    
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        > 
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Area type="monotone" dataKey="uv" stroke="black" fill="#82ca9d"/>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} fill="#82ca9d"/>
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    
                    </LineChart>
                </ResponsiveContainer>
            </div>       
        </div>
    )
}

export default Partidas
