const secondsToTime = (seconds) => {

    let secondsRemaining = seconds
  
    const secondAmounts = [
      {year: 31536000}, 
      {day: 86400},
      {hour: 3600},
      {minute: 60}, 
      {second: 1}
    ]
  
    let result = []
  
    secondAmounts.forEach((amount) => {
  
      let string = ""
  
      const value = Object.keys(amount)[0]
      const numberOfSecs = amount[value]
  
      if(secondsRemaining / numberOfSecs >= 1){
        const amount = Math.floor(secondsRemaining / numberOfSecs)
        secondsRemaining = secondsRemaining % numberOfSecs
  
        string += amount + " " + value
  
        if(amount > 1){string += "s"}
  
        result.push(string)
        if(secondsRemaining > 0){ result.push(", ")}
      }
    })
  
  if(result.length > 1){
    const final = result.pop()
    result.pop()
    result.push(' and ')
    result.push(final)
  }
  
  return result.join('')
  
  };