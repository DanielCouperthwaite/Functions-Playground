import { useState } from 'react'
import './App.css'
import CheckIdentical from './CheckIdentical.jsx'
import CountNestedItems from './CountNestedItems'
import PreventMutation from './PreventMutation'
import UpdateItems from './UpdateInventory'



function App() {
  const [show, setShow] = useState(false)

  function Functions() {
    return (
      <>
      
    
    <CheckIdentical />
    <CountNestedItems/>
    <UpdateItems />


      </>
    )

  }

  return (
    <>
      <div>
        
        
      </div>
      <h1>Functions Playground</h1>
      
      <p>Welcome to just a few different functions I have built while practising my coding skills!</p>
      <p>Be sure to check back for updates!</p>
      <p>Click the button below to start exploring...</p>
      <div className="card">
        {show === true ? <button onClick={() => setShow(false)}>Hide Functions</button> : <button onClick={() => setShow(true)}>Click Here</button>}
      </div>
      <p>{show === true ? <Functions /> : null}</p>
      
    </>
  )
}

export default App
