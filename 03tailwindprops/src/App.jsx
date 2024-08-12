import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App({Username}) {
  console.log(Username);
   
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 p-4 text-black rounded-xl mb-4'>Tailwind test</h1>
     <Card Username="Chai or code" btntext="Click me "/>
     <Card Username= "Nishita"  btntext="click me"/>
    </>
  )
}

export default App
