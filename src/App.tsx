import React from 'react';
import Clock from './components/Clock'; 
import numDial from "./img/numDial.png";
import markDial from "./img/markDial.png";
import romanDial from "./img/romanDial.png"; 


var myTime = {
      hour: 4,
      minutes: 30
}

function App() {
  return (
    
    <div className="App">
      <Clock dialType = {romanDial} hour = {myTime.hour} minutes = {myTime.minutes}/>      
    </div>
  );
}

export default App;
