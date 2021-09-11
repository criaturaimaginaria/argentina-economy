import React from 'react'
import './EconomicHistory.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
    Legend, ResponsiveContainer, Area, AreaChart, BarChart,Bar } from 'recharts';




export const EconomicHistory = () => {

    // 1900 a 1955 -----------------
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
// -----------------------------------

// 1956 a año 2000-----------------------
    let chartYears2 = []
    let inflation2 = [15,25,30,110,
      25,10,26,24,23,25,27,26,15,8,
      10,45,55,56,30,170,448,165,165,160,
      105,110,170,350,451,451,99,148,348,3079,
      2314,175,40,15,8,2,1,1,1,1 ,
      0,1,48,5,8,10,9,8,7]

const historicInflation2 = ()=>{
      let year2 = 1956
        for (let i = 0; i < 45; i++){   
          chartYears2.push({
              year2: year2 + i,
              inflation2: inflation2[i]
         })
     } 
  } 
 historicInflation2()        
        
// ------------------------------------
// 2001 a año 2020-----------------------
let chartYears3 = []
let inflation3 = [1.1,41,3.7,6.1,12.3,10.9,8.5,7.2,7.7,10.9,
  9.5,10.8,10.9,23.9,26.9,36.3,24.8,47.6,54,36.1,
  45]
  let inflParalela = [,,,,,,14.8,25.7,11.4,23.9,
    18.3,21.8,26.6,40,,,,,,,]

const historicInflation3 = ()=>{
  let year3 = 2001
    for (let i = 0; i < 20; i++){   
      chartYears3.push({
          year3: year3 + i,
          oficial: inflation3[i],
          paralela: inflParalela[i]
     })
 } 
} 
historicInflation3()        
    
// ------------------------------------

    return (
        <div className="EconHis">
            
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
                        {/* <Area type="monotone" dataKey="uv" stroke="black" fill="black" /> */}
                        <Tooltip />
                        
                        {/* <Area fill="#8884d8" /> */}
                        <Area  type="monotone" dataKey="inflation" stroke="rgb(132, 0, 184)"  fill="rgb(0, 77, 200)"/>
                        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                    
                    </AreaChart>
                </ResponsiveContainer>
            </div>      

            <h2>1956 - 2000</h2>
            
            <div className="chart2"> 
                <ResponsiveContainer width="100%" aspect={2}>
                    <AreaChart
                    
                        width={500}
                        height={300}
                        data={chartYears2}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        > 
                        <CartesianGrid strokeDasharray="4" horizontal="true" vertical="true" />
                        <XAxis dataKey="year2" />
                        
                        <YAxis />
                        {/* <Area type="monotone" dataKey="uv" stroke="black" fill="black" /> */}
                        <Tooltip />
                        <Legend width={100} wrapperStyle={{ top: 0, right: 0, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                        {/* <Area fill="#8884d8" /> */}
                        <Area  type="monotone" dataKey="inflation2" stroke="blue"  fill="rgb(0, 77, 200)"/>
                        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                    
                    </AreaChart>
                </ResponsiveContainer>
            </div>     

            <h2>2001 - 2021</h2>
        

            <div className="chart3"> 
                <ResponsiveContainer width="100%" aspect={2}>
                    <BarChart
                    
                        width={500}
                        height={300}
                        data={chartYears3}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        > 
                        <CartesianGrid strokeDasharray="4" horizontal="true" vertical="" />
                        <XAxis dataKey="year3" />
                        <YAxis />
                        <Tooltip />
                        <Legend width={100} wrapperStyle={{ top: 0, right: 0, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '20px' }} />
                        {/* <Area fill="#8884d8" /> */}
                        <Bar  type="monotone" dataKey="oficial" stroke="black"  fill="red"/>
                        <Bar type="monotone" dataKey="paralela" stroke="black" fill="black" />
                    
                    </BarChart>
                </ResponsiveContainer>
            </div>            


        </div>
    )
}


export default EconomicHistory