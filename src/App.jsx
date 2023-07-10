import { useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(false)

  function UpdateItems() {
    return (
      <>
      
    <p>Hello</p>

    <input type="text" ></input>
      </>
    )

  }

  return (
    <>
      <div>
        
        
      </div>
      <h1>Functions Playground</h1>
      <p>Hi there!</p>
      <p>Welcome to a few different functions I have built while practising katas.</p>
      <p>Click the button below to start exploring!.</p>
      <div className="card">
        {show === true ? <button onClick={() => setShow(false)}>Hide Functions</button> : <button onClick={() => setShow(true)}>Click Here</button>}
      </div>
      <p>{show === true ? <UpdateItems /> : null}</p>
      
    </>
  )
}

export default App
