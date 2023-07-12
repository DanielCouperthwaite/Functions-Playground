import CountItems from '../utils/count-nested-items'
import { useState } from "react"

export default function CountNestedItems (){

    const [input, setInput] = useState([])
    const [result, setResult] = useState([])
    console.log(input)
    console.log(result)

    function handleSubmit (event){
        event.preventDefault();
        console.log(input, JSON.parse(input))
        setResult(CountItems(JSON.parse(input)))
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
            <p>{input}</p>
            <p>{result["string"]}</p>
            <p>{result["object"]}</p>
            <p>{result["array"]}</p>
            <p>{result["number"]}</p>
            <p>{result["boolean"]}</p>
            </section>
        </>
    )
}