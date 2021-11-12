import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const state =  {
    labels:[
        
    ],
    datasets:[
       {
        labels: 'trans',
        backgroundColor:[
            '#FFFFFF',
            '#D3D3D3'
        ],
        hoverBackgroundColor:[
            '#E3E3E3',
            '#FFFFFF'
        ],
        label:[
            'taken',
            'remaining'
        ],
        data:[25,75]
       }
    ]
}



export const Doughpie2 = () => {
    return (
        <div style={{marginTop:-30, marginLeft:20}}>
          <Doughnut
          data = {state}
          options = {{
              title : {
                  display: true,
                  fontSize :9
              },
              legend:{
                  display: true,
                  position: 'right'}
              }}/>
        </div>
    )
}
export default Doughpie2