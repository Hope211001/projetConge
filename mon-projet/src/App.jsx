import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyCars from './components/MyCars'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MyCars/>
  )
}
export default App