import CountItems from '../utils/count-nested-items'
import { useState } from "react"

export default function CountNestedItems (){

    const [input, setInput] = useState([])
    const [result, setResult] = useState('')
    const [showInput, setShowInput] = useState([])
    const [pressed, setPressed] = useState(false)

    function handleSubmit (event){
        event.preventDefault();
        setResult('')
        setShowInput('Please enter a valid object!')
        if(input.length === 0){
            setShowInput('Please enter a valid object!')
        } else {
            const jsonString = eval('(' + input + ')')
            setShowInput(input)
            setResult(CountItems(jsonString))
        }
    }

    return (
        <>
            <section style={{border: '10px solid', padding: '20px', margin: '20px'}}>
            <h2>Count Data Types</h2>
            <p>A function to to count the types of data within an object, however deeply nested!</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text area"
                    placeholder="eg. {1: 1, 2: 'two', 3:[4]}"
                    value={input}
                    onChange={(event) => {
                        setPressed(false)
                        setInput(event.target.value)
                    }}
                />
                <button style={{margin: '20px'}}>Activate Function!</button>
            </form>
            <p>{showInput}</p>
            <p>{Object.keys(result).length === 0 && pressed === true ? 'error4' : null}</p>
            <p>{result["string"] > 0 ? <p>Strings: {result["string"]}</p> : null}</p>
            <p>{result["object"] > 0 ? <p>Objects: {result["object"]}</p> : null}</p>
            <p>{result["array"] > 0 ? <p>Arrays: {result["array"]}</p> : null}</p>
            <p>{result["number"] > 0 ? <p>Numbers: {result["number"]}</p> : null}</p>
            <p>{result["boolean"] > 0 ? <p>Booleans: {result["boolean"]}</p> : null}</p>
            </section>
        </>
    )
}