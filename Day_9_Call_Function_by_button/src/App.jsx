import { useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <h1>Priyanshu Well Come </h1>
    <Home/>
    </>
  )
}

export default App
