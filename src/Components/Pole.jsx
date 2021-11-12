import React from "react";
import {PolarArea} from 'react-chartjs-2'

const state ={
    labels: ['Account','Services','Restaurant','Others'],
    datasets:[
        {
            label:'huj',
            data :[20,40,15, 15],
            backgroundColor:['#2251F8','#68E365','#FFA133','#E3E3E3']
        }
    ]
}

export const Pole = () => {
    return (
        <div style={{width:250}}>
        <PolarArea
         data = {state}
         options = {{
             title : {
                 display: true,
                 fontSize :9
             },
             legend:{
                 display: true,
                 position: 'left'}
             }}/>           
        </div>
    )
}
