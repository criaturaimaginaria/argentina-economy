import React, {useState, useEffect} from 'react'
import './EconomicHistory.css'
import {Line} from 'react-chartjs-2'

export const EconomicHistory = () => {
    
    const [firstMidCentury, setFirstMidCentury] = useState ({})
    const [SecondMidCentury, setSecondMidCentury] = useState ({})
    let chartYears = []
    let chartYears2 = []

    const historicInflation = ()=>{
        let year = 1900
        for (year; year < 1956; year++){
            chartYears = chartYears.concat(year)
      } 
} 
const historicInflation2 = ()=>{
    let year2 = 1956
    for (year2; year2 < 2001; year2++){
        chartYears2 = chartYears2.concat(year2)
  } 
} 

historicInflation() 
let yearsList = chartYears.map(years =>  (years))
historicInflation2() 
let yearsList2 = chartYears2.map(years =>  (years))

    const chart = () => {
        setFirstMidCentury({
            labels: yearsList,
            datasets:[
                {
                    label: 'inflation',
                    data: [9,-1,8,-3,0,8,4,2,4,1,
                          4,-1,1,0,8,10,15,25,-8,-8,
                          25,-10,-15,0,1,-1,-1,0,0,1,
                          1,-14,-10,11,-11,5,8,4,0,1,
                          2,3,5,6,1,0,20,19,30,25,
                          30,40,49,5,5,10],
                    backgroundColor:['rgba(75,123,324,0.6)'],
                    borderWidth: 4
                }
            ]
        })

        setSecondMidCentury({
            labels: yearsList2,
            datasets:[
                {
                    label: 'inflation',
                    data: [15,25,30,110,
                          25,10,26,24,23,25,27,26,15,8,
                          10,45,55,56,30,170,448,165,165,160,
                          105,110,170,350,451,451,99,148,348,3079,
                          2314,175,40,15,8,2,1,1,1,-1 ,
                          0,-1,48,5,8,10,9,8,7],
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
                <Line data={firstMidCentury} options={{
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

            <div className="inflation2">
                <Line data={SecondMidCentury} options={{
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