import * as React from 'react'; 

export interface Props {
    dialType: string; 
    hour: number; 
    minutes: number; 
}

function Clock({ dialType, hour, minutes } : Props) {
    
    return (
        <div className = "Clock">
            <h1>The time is {hour} : {minutes}</h1>
            <img src = {dialType} alt = "" className = "images"></img>
        </div>
    ); 

}

export default Clock; 

