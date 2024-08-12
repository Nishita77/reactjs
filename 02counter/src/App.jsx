import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setcounter]= useState(15)

  const addValue= ()=>{

    console.log("clicked",counter);
    if(counter<20){
    setcounter(counter+1)
    }
    else{
      setcounter(counter=20)
    }

    
    
  }

  const removeValue =() =>{
    console.log("clicked", counter);
    
    if(counter>0){
      setcounter(counter-1)
    }
    else{
      setcounter(counter=0)
    }
    
  }




  return (
    <>
    <h1>Chai or react </h1>
    <h2>counter value:{counter}</h2>
    <button 
    onClick={addValue}>Add value{counter}</button>
    <br/>
    <button onClick={removeValue}>Remove value {counter}</button>
    
    </>
  )
}

export default App
