import React, {useState, useEffect} from 'react'
import './EconomicHistory.css'
import { Chart } from 'chart.js';
import {Bar, Line} from 'react-chartjs-2'
import zoomPlugin  from 'chartjs-plugin-zoom'

Chart.register(zoomPlugin);

export const EconomicHistory = () => {

    const [firstMidCentury, setFirstMidCentury] = useState ()
    const [SecondMidCentury, setSecondMidCentury] = useState ()
    const [XXIcentury, setXXIcentury] = useState ()
    let chartYears = []
    let chartYears2 = []
    let chartYears3 = []



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
const historicInflation3 = ()=>{
  let year3 = 2001
  for (year3; year3 < 2022; year3++){
      chartYears3 = chartYears3.concat(year3)
  } 
} 


historicInflation() 
let yearsList = chartYears.map(years =>  (years))
historicInflation2() 
let yearsList2 = chartYears2.map(years =>  (years))
historicInflation3() 
let yearsList3 = chartYears3.map(years =>  (years))


Chart.defaults.font.size = 16;
    const chart = () => {
        setFirstMidCentury({
            labels: yearsList,
            datasets:[
                {
                    label: 'Inflation',
                    fill: true,
                    spanGaps:true,
                    tension: 0.5,
                    // borderColor: Utils.CHART_COLORS.red,
                    // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
                    borderWidth: 2,
                    borderRadius:15,
                    radius: 15,
                    pointStyle: 'circle',
                    pointRadius: 0,
                    hoverRadius: 8 ,
                    pointBorderColor: 'black', 
                    hoverBackgroundColor:['rgb(163, 163, 163)'],

                    borderColor: 'rgb(117, 0, 172)',
                    backgroundColor:['rgba(75,123,324,0.6)'],
                    data: [9,-1,8,-3,0,8,4,2,4,1,
                          4,-1,1,0,8,10,15,25,-8,-8,
                          25,-10,-15,0,1,-1,-1,0,0,1,
                          1,-14,-10,11,-11,5,8,4,0,1,
                          2,3,5,6,1,0,20,19,30,25,
                          30,40,49,5,5,10],
                    
                   
                    // borderWidth: 4
                }
                
            ]
        })

        setSecondMidCentury({
            labels: yearsList2, 
            datasets:[
                {
                    label: 'inflation' ,
                    fill: true,
                    tension: 0.5,
                    // borderColor: Utils.CHART_COLORS.red,
                    // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
                    borderWidth: 2,
                    borderRadius:15,
                    radius: 15,
                    pointStyle: 'circle',
                    pointRadius: 3.1,
                    hoverRadius: 8 ,
                    pointBorderColor: 'black', 
                    hoverBackgroundColor:['rgb(163, 163, 163)'],

                    borderColor: 'rgb(117, 0, 172)',
                    backgroundColor:['rgba(75,123,324,0.6)'],
                    data: [15,25,30,110,
                          25,10,26,24,23,25,27,26,15,8,
                          10,45,55,56,30,170,448,165,165,160,
                          105,110,170,350,451,451,99,148,348,3079,
                          2314,175,40,15,8,2,1,1,1,1 ,
                          0,1,48,5,8,10,9,8,7],
                   
                }
            ]
        })

        setXXIcentury({
          // labels: yearsList3,
          labels: yearsList3,
          datasets:[
              {
                
                  label: 'Inflation paralela',
                  fill: false,
                  spanGaps:true,
                  tension: 0.3,
                  // borderColor: Utils.CHART_COLORS.red,
                  // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
                  borderWidth: 2,
                  borderRadius:15,
                  radius: 15,
                  pointStyle: 'circle',
                  pointRadius: 3,
                  hoverRadius: 8 ,
                  pointBorderColor: 'black', 
                  hoverBackgroundColor:['rgb(176, 200, 255)'],

                  borderColor: 'rgb(117, 0, 172)',
                  backgroundColor:['rgb(125, 164, 255)'],
                  data: [,,,,,,14.8,25.7,11.4,23.9,
                        18.3,21.8,26.6,40,,,,,,,],
                        
                  // borderWidth: 4
              },
              {
                label: 'Inflation oficial',
                fill: true,
                spanGaps:true,
                tension: 0.4,
                // borderColor: Utils.CHART_COLORS.red,
                // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
                borderWidth: 2,
                borderRadius:15,
                radius: 15,
                pointStyle: 'circle',
                pointRadius: 3,
                hoverRadius: 8 ,
                pointBorderColor: 'black', 
                hoverBackgroundColor:['rgb(185, 80, 204)'],

                borderColor: 'rgb(117, 0, 172)',
                backgroundColor:['rgb(162, 0, 190)'],
                data: [-1.1,41,3.7,6.1,12.3,10.9,8.5,7.2,7.7,10.9,
                      9.5,10.8,10.9,23.9,26.9,36.3,24.8,47.6,54,36.1,
                      45],
                // borderWidth: 4
            }
              
          ]
      })
    }

    useEffect(()=>{
        chart()
    }, [])
    

    
    return (
        <div className="EconomicHistory">

      <h1>120 años de história inflacionaria de la república Argentina </h1>

      <h2>1900 - 1955</h2>

            <div className="inflation">
                <Line data={firstMidCentury} options={{
                    responsive:true,
                    title: {text: 'Inflation', display:true},
                    scales: {
                        yAxes: [
                          {
                            ticks: {
                              autoSkip: true,
                              maxTicksLimit: 10,
                              beginAtZero: true,
                            },
                            gridLines: {
                              display: false,
                            },
                          },
                        ],
                        xAxes: [
                          {
                            gridLines: {
                              display: false,
                            },
                          },
                        ],
                   
                      },
                     
                      plugins: {
                        zoom: {
                          zoom: {
                            wheel: {
                              enabled: true // zoom sroll 
                            },
                            mode: "xy",
                            speed: 100
                          },
                          pan: {
                            enabled: true,
                            mode: "xy",
                            speed: 100
                          }
                        }
                      }

                }}/>
            </div>

            <h2>1956 - 2000</h2>

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
                        
                    },
                    plugins: {
                        zoom: {
                          zoom: {
                            wheel: {
                              enabled: true // zoom sroll 
                            },
                            mode: "xy",
                            speed: 100
                          },
                          pan: {
                            enabled: true,
                            mode: "xy",
                            speed: 100
                          }
                        }
                      }
                    
                }}/>

              
            </div>

            <h2>2001 - 2021</h2>

<div className="inflation3">
    <Bar data={XXIcentury} options={{
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
            
        },
        plugins: {
            zoom: {
              zoom: {
                wheel: {
                  enabled: true // zoom sroll 
                },
                mode: "xy",
                speed: 100
              },
              pan: {
                enabled: true,
                mode: "xy",
                speed: 100
              }
            }
          }
        
    }}/>
</div>

        </div>
    )
}

export default EconomicHistory