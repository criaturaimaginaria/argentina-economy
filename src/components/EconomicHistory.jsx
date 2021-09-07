import React, {useState, useEffect} from 'react'
import './EconomicHistory.css'
import {Line} from 'react-chartjs-2'

export const EconomicHistory = () => {
    
    const [chartData, setChartData] = useState ({})

    let chartYears = []

    const historicInflation = ()=>{
        let year = 1900
        for (year; year < 1990; year++){
            chartYears = chartYears.concat(year)
    //    console.log(chartYears)
    } 
} 

historicInflation() 
let yearsList = chartYears.map(years =>  (years))
  console.log(yearsList)

    const chart = () => {
        setChartData({
            labels: yearsList,
            datasets:[
                {
                    label: 'inflation',
                    data: [9,-1,8,-3,0,8,4,2,4,1,
                          4,-1,1,0,8,10,15,25,-8,-8,
                          25,-10,-15,0,1,-1,-1,0,0,1,
                          1,-14,-10,11,-11,5,8,4,0,1,
                          2,3,5,6,1,0,20,19,30,25,
                          30,40,49,5,5,10,15,25,30,110,
                          25,10,26,24,23,25,27,26,15,8,
                          10,45,55,56,30,170,448,165,165,160],
                    backgroundColor:['rgba(75,123,324,0.6)'],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(()=>{
        chart()
    }, [])
    
    return (
        <div>

            <h1>econ history</h1>

            <div className="inflation">
                <Line data={chartData} options={{
                    responsive:true,
                    title: {text: 'inflation', display:true},
                    scales:{
                        yAxes: [
                            {
                                ticks:{
                                    autoSkip:true,
                                    maxTicksLimit:2,
                                    beginAtZero:true
                                },
                                gridLines:{
                                    display:false,
                                }
                            }
                        ]
                    }
                }}/>
            </div>

        </div>
    )
}

export default EconomicHistory