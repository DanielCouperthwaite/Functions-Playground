import checkIfIdentical from '../utils/check-if-identical'
import { useState } from 'react'

export default function CheckIdentical (){
    const [input1, setInput1] = useState([])
    const [input2, setInput2] = useState([])
    const [result, setResult] = useState('')
    const [showInput, setShowInput] = useState([])
    const [pressed, setPressed] = useState(false)

    function handleSubmit (event){
        event.preventDefault();
        setResult('')
        setShowInput('Please enter a valid object!')
        if(input1.length === 0 || input2.length === 0){
            setShowInput('Please enter a valid object!')
        } else {
            const jsonString1 = eval('(' + input1 + ')')
            const jsonString2 = eval('(' + input2 + ')')
            setShowInput(input1 + ' = ' + input2 + ' ?')
            if(checkIfIdentical(jsonString1, jsonString2) === true){
                setResult('true')
            } else setResult('false')
        }
    }
    
    return (
        <>
            <section style={{border: '10px solid'}}>
            <h2>Count Data Types</h2>
            <p>A function to to count the types of data within an object, however deeply nested!</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text area"
                    placeholder="Enter first object here!"
                    value={input1}
                    onChange={(event) => {
                        setPressed(false)
                        setInput1(event.target.value)
                    }}
                />
                <input
                    type="text area"
                    placeholder="Eneter second object here!"
                    value={input2}
                    onChange={(event) => {
                        setPressed(false)
                        setInput2(event.target.value)
                    }}
                />
                <button>Activate Function!</button>
            </form>
            <p>{showInput}</p>
            <p>{result}</p>
            </section>
        </>
    )
}