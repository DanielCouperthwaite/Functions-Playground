import convertRomanNumerals from '../utils/convert-roman-numerals'
import { useState } from 'react'

export default function CheckIdentical (){
    const [input1, setInput1] = useState([])
    const [result, setResult] = useState('')
    const [showInput, setShowInput] = useState([])

    function handleSubmit (event){
        event.preventDefault();
        setResult('')
            if(convertRomanNumerals(input1).length > 0){
                setResult(convertRomanNumerals(input1))
                setShowInput('')
            } else setShowInput('Please enter a number!')
    }
    
    return (
        <>
            <div style={{padding: '20px'}}>
            <section style={{border: '10px solid', padding: '20px', margin: '20px', borderRadius: '25px'}}>
            <h2>Convert Numbers to Roman Numerals</h2>
            <p>A function to convert any 4 digit number to Roman numerals</p>
            <p>Fun fact! Traditionally the biggest number that can expressed with Roman Numerals is 3,999. We can estimate what the Romans might have written if you like though!</p>
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