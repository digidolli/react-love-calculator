import React, { useState } from 'react';
import LovePercent from "./LovePercent.js"


import './App.css';

function App() {

  let [yourName, setYourName] = useState (null)
  let [theirName, setTheirName] = useState (null)
  let [calculated, setCalculated] = useState ({ready: false})
  
  function handleSumbit(event){
    event.preventDefault();
    setCalculated ({
      ready: true,
      percentage: Math.floor(Math.random()),
    })
  }

  function handleYourNameChange (event){
    setYourName(event.target.value)
    console.log(yourName)
  }

  function handleTheirNameChange (event){
    setTheirName(event.target.value)
    console.log(theirName)
  }
  
  if (calculated.ready){
    return (
      <div className='App calculated'>
        <h1>{yourName} + {theirName}</h1> 
        <LovePercent /> 
      </div>
    )
  } else {
  return (
    <div className="App">
      <h1>Love calculator</h1>     
        <form className="yourName" onSubmit={handleSumbit}>
            <input type="search" placeholder="enter your name..." onChange={handleYourNameChange} /> 
            <input type="search" placeholder='enter their name...' onChange={handleTheirNameChange}/> 
            <input type="submit" value="Calculate"/>
        </form>
       </div>
  )}
  
}

export default App;
