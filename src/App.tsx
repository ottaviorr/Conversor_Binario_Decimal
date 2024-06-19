import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(' ')
  const [decimal, setDecimal] = useState(' ')

  function convertToBin(n:any) {
    return (n >>> 0).toString(2);
  }

  function handleBinaryChange(e:any){
    const value = e.target.value
    setCount(value);
  }

  
  function handleDecimalChange(e:any){
    const value = e.target.value
    setDecimal(value);
  }

  return (
    <>
      <h1>Binario para decimal</h1>
      <label>Digite um numero: </label>
      <input type="text" onChange={handleBinaryChange} value={count}/>
      <p>{parseInt(count, 2)}</p>

      <h1>Decimal para Binario</h1>
      <label>Digite um numero: </label>
      <input type="text" onChange={handleDecimalChange} value={decimal}/>
      <p>{convertToBin(decimal)}</p>
    </>
  )
}

export default App
