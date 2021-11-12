
import React from "react";

const Progressbar = ({bgcolor,progress,height}) =>{

    const Parentdiv ={
        height: height,
        width:'70%',
        backgroundColor:'#EEEEEE',
        borderRadius:40,
        // margin:50
    }
    const Childdiv = {
        height:'100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        // textAlign:'right'
    }
    
    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span >{`${progress}`}</span>
            </div>
        </div>
    )
}
export default Progressbar
