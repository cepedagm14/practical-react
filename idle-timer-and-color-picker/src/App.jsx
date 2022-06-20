import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {IdleTimerContainer} from './components/IdleTimerContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <IdleTimerContainer/>
    </div>
  )
}

export default App
