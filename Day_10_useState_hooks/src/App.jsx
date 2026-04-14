import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Example from './Components/Example'
import MultipalCondition from './Components/MultipalCondition'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    <Example />
    <MultipalCondition/>
    </>
     
  )
}

export default App
