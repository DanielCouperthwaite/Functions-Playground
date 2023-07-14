import checkIfIdentical from '../utils/check-if-identical'
import { useState } from 'react'

export default function CheckIdentical (){
    const [input1, setInput1] = useState([])
    const [input2, setInput2] = useState([])
    const [result, setResult] = useState('')
    const [showInput, setShowInput] = useState([])

    function handleSubmit (event){
        event.preventDefault();
        setResult('')
        setShowInput('Please enter two valid objects!')
        if(input1.length === 0 || input2.length === 0){
            setShowInput('Please enter two valid objects!')
        } else {
            const jsonString1 = eval('(' + input1 + ')')
            const jsonString2 = eval('(' + input2 + ')')
            setShowInput(input1 + ' = ' + input2 + ' ?')
            if(checkIfIdentical(jsonString1, jsonString2) === true){
                setResult('✔️ These objects match!')
            } else setResult('❌ These objects do not match')
        }
    }
    
    return (
        <>
            <div style={{padding: '20px'}}>
            <section style={{border: '10px solid', padding: '20px', margin: '20px', borderRadius: '25px'}}>
            <h2>Check if Objects are Identical</h2>
            <p>A function to check whether the items in an object are identical, however deeply nested they might be!</p>
            <form onSubmit={handleSubmit}>
                <input
                    style={{margin: '5px'}}
                    type="text area"
                    placeholder="Enter first object here!"
                    value={input1}
                    onChange={(event) => {
                        setInput1(event.target.value)
                    }}
                />
                <input
                    style={{margin: '5px'}}
                    type="text area"
                    placeholder="Enter second object here!"
                    value={input2}
                    onChange={(event) => {
                        setInput2(event.target.value)
                    }}
                />
                <button style={{margin: '15px'}}>Activate Function!</button>
            </form>
            <p>{showInput}</p>
            <p>{result}</p>
            </section>
            </div>
        </>
    )
}