import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let [count, setCount] = useState(0);

  const addValue = () => {
    count = count+1;
    setCount(count);
  }
  const removeValue = () => {
    setCount(count-1);
  }

  

  return (
    <>
      <h1> Chai aur React</h1>
      <h3> Counter Value : {count}</h3>

      <button
      onClick={addValue}
      >Increase Value</button>
      <br/>
      <br/>
      <button
      onClick={removeValue}
      >Decrease Value</button>
    </>
  )
}

export default App
