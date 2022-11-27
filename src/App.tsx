import { useState } from 'react'
import HomeView from '../src/pages/Home'
import './App.css'
import '../src/assets/styles/main.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <HomeView/>
    </div>
  )
}

export default App
