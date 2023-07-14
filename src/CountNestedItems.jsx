import CountItems from '../utils/count-nested-items'
import { useState } from "react"

export default function CountNestedItems (){

    const [input, setInput] = useState([])
    const [result, setResult] = useState('')
    const [showInput, setShowInput] = useState([])
    const [pressed, setPressed] = useState(false)

    function handleSubmit (event){
        event.preventDefault();
        setPressed(true)
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

    function handleReset(event){
        event.preventDefault();
        setResult('')   
        setShowInput([])
        setInput([])
    }


    return (
        <>
            <div style={{padding: '20px'}}>
            <section style={{border: '10px solid', padding: '20px', margin: '20px', borderRadius: '25px'}}>
            <h2>Count Data Types</h2>
            <p>A function to to count the types of data within an object, however deeply nested!</p>
            <p>Feel free to drop an object into the text box below, or give it a try with this example: {"{1: 1, 2: [3, 4, {5: true}],6: [{name: 'Michael'}, {likes: ['music', 'fish']}]}"}</p>
            <p>{"{1: 1, 2: [3, 4, {5: true}],6: [{name: 'Michael'}, {likes: ['music', 'fish']}]}"}</p>
            <form style={{display: 'inline-flex', margin: 'auto'}} onSubmit={handleSubmit}>
                <textarea
                    placeholder="Enter object here!

eg. {
    1: 1, 
    2: [3, 4, {5: true}],
    6: [{name: 'Michael'}, {likes: ['music', 'fish']}]
}"
                    rows={7}
                    cols={55}
                    value={input}
                    onChange={(event) => {
                        setPressed(false)
                        setInput(event.target.value)
                    }}
                />
                <button style={{margin: '20px'}}>Activate Function!</button>
            </form>
            <p>{showInput}</p>
            {/* <p>{Object.keys(result).length === 0 && pressed === true ? 'error4' : null}</p> */}
            <p>{result["string"] > 0 ? <p>Strings: {result["string"]}</p> : null}</p>
            <p>{result["object"] > 0 ? <p>Objects: {result["object"]}</p> : null}</p>
            <p>{result["array"] > 0 ? <p>Arrays: {result["array"]}</p> : null}</p>
            <p>{result["number"] > 0 ? <p>Numbers: {result["number"]}</p> : null}</p>
            <p>{result["boolean"] > 0 ? <p>Booleans: {result["boolean"]}</p> : null}</p>
            <p>{Object.keys(result).length > 0 && pressed === true ? <button onClick={handleReset}>Reset</button> : null}</p>
            </section>
            </div>
        </>
    )
}