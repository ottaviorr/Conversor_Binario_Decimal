import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(' ')
  const [decimal, setDecimal] = useState(' ')

  function convertToBin(n:any) {
    return (n >>> 0).toString(2);
  }

  return (
    <>
      <h1>Binario para decimal</h1>
      <label>Digite um numero: </label>
      <input type="text" onChange={(e)=>setCount(e.target.value)}/>
      <p>{parseInt(count, 2)}</p>

      <h1>Decimal para Binario</h1>
      <label>Digite um numero: </label>
      <input type="number" onChange={(e)=>setDecimal(e.target.value)}/>
      <p>{convertToBin(decimal)}</p>
    </>
  )
}

export default App
