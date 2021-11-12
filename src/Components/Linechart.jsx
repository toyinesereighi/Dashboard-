import React from "react";
import {Line} from 'react-chartjs-2'

const state = {
    labels:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    datasets:[
        {
            label: 'Sales',
            fill: false,
            lineTension:0.5,
            backgroundColor:'#FC2E53',
            boderColor:'rgba(0,0,0,1)',
            borderWidth: 1,
            data:[30,50,40,45,20,35,50,60,57,40,60,70,40,30,10]
        }
    ]
}


export const Linechart = () => {
    return (
        <div>
            <Line
            data={state}
            options={{
                title:{
                    display: true,
                    fontsize:20
                },
                legend:{
                    display: true,
                    position: 'center'
                }
            }}/>
        </div>
    )
}
export default Linechart
