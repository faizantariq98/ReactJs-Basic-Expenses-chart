import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'
const Chart = (props) => {
    const dataPointValues=props.dataItems.map(datapoint=>datapoint.value)
    const totalMaximum=Math.max(...dataPointValues)
    return (
        <div className='chart'>
            {props.dataItems.map((data)=>(
                <ChartBar
                key={data.label}
                value={data.value}
                maxValue={totalMaximum}
                label={data.label}/>
            ))}
        </div>
    )
}

export default Chart
