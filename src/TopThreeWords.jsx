import topThreeWords from '../utils/top-three-words.js'
import { useState } from 'react'

export default function CheckIdentical (){
    const [input1, setInput1] = useState([])
    const [result, setResult] = useState('')
    const [showInput, setShowInput] = useState([])

    function handleSubmit (event){
        event.preventDefault();
        setResult('')
            if(topThreeWords(input1).length > 0){
                console.log(topThreeWords(input1)[0])
                setResult(topThreeWords(input1))
                setShowInput('')
            } else setShowInput('Please enter a number!')
    }
    
    return (
        <>
            <div style={{padding: '20px'}}>
            <section style={{border: '10px solid', padding: '20px', margin: '20px', borderRadius: '25px'}}>
            <h2>Top 3 Words</h2>
            <p>A function to the 3 most common words in any string!</p>
            <form onSubmit={handleSubmit}>
                <input
                    style={{margin: '5px'}}
                    type="text area"
                    placeholder="Enter your number here!"
                    value={input1}
                    onChange={(event) => {
                        setInput1(event.target.value)
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