import { useState } from 'react'
import './App.css'
import CheckIdentical from './CheckIdentical.jsx'

// import checkIdentical from '../utils/check-if-identical'
// import CountItems from '../utils/count-nested-items'
// import preventMutation from '../utils/prevent-mutation'
// import UpdateItems from '../utils/update-inventory'

function App() {
  const [show, setShow] = useState(false)

  function Functions() {
    return (
      <>
      
    <p>Functions go here!</p>
    <CheckIdentical />

    

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
      <p>{show === true ? <Functions /> : null}</p>
      
    </>
  )
}

export default App
