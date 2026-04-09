import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CounterA from './Components/CounterA'
import CounterB from './Components/CounterB'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterA></CounterA>
    <CounterB></CounterB>
   
    </>
    
  )
}

export default App
