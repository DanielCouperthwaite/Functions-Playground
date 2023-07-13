import CountItems from '../utils/count-nested-items'
import { useState } from "react"

export default function CountNestedItems (){

    const [input, setInput] = useState([])
    const [result, setResult] = useState('')
    const [showInput, setShowInput] = useState([])
    // console.log(input)
    // console.log(result)

    function handleSubmit (event){
        event.preventDefault();
        

        const jsonString = eval('(' + input + ')')
        

        console.log(input)

        // console.log(input.charAt(0))
            
            setShowInput(input)
            console.log(CountItems(jsonString))
            setResult(CountItems(jsonString))
        
    }

    return (
        <>
            <section style={{border: '10px solid'}}>
            <h2>Count Data Types</h2>
            <p>A function to to count the types of data within an object, however deeply nested!</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text area"
                    placeholder="eg. {1, 2, 3, [4]}"
                    value={input}
                    onChange={(event) => {
                        setInput(event.target.value)
                    }}
                />
                <button>Activate Function!</button>
            </form>
            <p>{showInput}</p>
            <p>{result["string"] > 0 ? <p>Strings: {result["string"]}</p> : null}</p>
            <p>{result["object"] > 0 ? <p>Objects: {result["object"]}</p> : null}</p>
            <p>{result["array"] > 0 ? <p>Arrays: {result["array"]}</p> : null}</p>
            <p>{result["number"] > 0 ? <p>Numbers: {result["number"]}</p> : null}</p>
            <p>{result["boolean"] > 0 ? <p>Booleans: {result["boolean"]}</p> : null}</p>
            </section>
        </>
    )
}