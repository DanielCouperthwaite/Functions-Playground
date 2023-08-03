function atm(value) {

    const VALUES = { RUB: [ 10, 50, 100, 500, 1000, 5000 ],
        EUR: [ 5, 10, 20, 50, 100, 200, 500 ],
        UAH: [ 1, 2, 5, 10, 50, 100, 500 ],
        USD: [ 1, 2, 5, 10, 20, 50, 100 ],
        CUP: [ 1, 3, 5, 10, 20, 50, 100 ],
        SOS: [ 1000 ] }
  
    const number = value.replace(/[^0-9]/g,"")
    const currency = (value.replace(/[^A-Za-z]/g,"")).toUpperCase()
    
    let currencyStr = "";
    
    const notes = VALUES[currency]
    
    if(notes === undefined){return `Sorry, have no ${currency}.`}
    else if(number % notes[0] !== 0){return `Can\'t do ${number} ${currency}. Value must be divisible by ${notes[0]}!`}
    else {
      
      let bills = []
      let billStr = ""
      let remaining = number
      
      for(let i = notes.length - 1; i >= 0; i--){
        let count = 0
        while(remaining / notes[i] >= 1){
            count++
            bills.push(notes[i])
            remaining -= notes[i]
          }
        if(count !== 0){
        billStr += `${count} * ${notes[i]} ${currency}, `
        }
      }
      
      const length = billStr.length
      
      const result = billStr.split('')
      result.pop()
      result.pop()
      
      return result.join("")
      
    }
  }

//   Imagine that we have ATM with multiple currencies. The users can withdraw money of in any currency that the ATM has.

// Our function must analyze the currency and value of what the users wants, and give money to the user starting from bigger values to smaller. The ATM gives the least amount of notes possible.

// This kata has a preloaded dictionary of possible bank note values for different currencies (RUB, EUR, UAH, USD, CUP, SOS):

// const VALUES = { "EUR": [5, 10, 20, 50, 100, 200, 500], "USD": ... }
// // Note: VALUES and its internal arrays are frozen, don't try to mutate them
// The function should return a string containing how many bank notes of each value the ATM will give out, for example:

// "8 * 100 USD, 2 * 20 USD, 1 * 2 USD"
// If it can't do that because there are no notes for this value, it should return:

// "Can't do *value* *currency*. Value must be divisible by *amount*!"
// (replace *value*, *currency* and *amount* with the relevant details)

// If it doesn't have the requested currency at all, it should return:

// "Sorry, have no *currency*."
// Notes:
// Letter case and word order doesn't matter in the input: e.g. "EUR 1000" and "1000eur" are the same. See test cases for more user input samples.
// Do not create your own VALUES dictionary/hash or you'll get broken tests.