import React from 'react'
import {PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './Title.css' 


export const Title = () => {

    const data = [
        { name: 'A', value: 300 },
        { name: 'B', value: 250 },
        { name: 'C', value: 250 },
        { name: 'D', value: 80 },
      ]; 

      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
    return (
        <div>

            
            
            <div className="chart"> 
           
                <ResponsiveContainer  height={150} width="100%" >
                    <PieChart >
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                           
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={70}
                            fill="rgb(34, 31, 31)"
                            dataKey="value"
                        >
                                {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                        </Pie>
                   </PieChart>
                </ResponsiveContainer>
            </div>   

        </div>
    )
}

export default Title