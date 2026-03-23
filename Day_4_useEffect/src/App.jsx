import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Users from './Components/Users'
import Timer from './Components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Users/>  
    <Timer/>
    </>
  )
}

export default App
