export default function solution(number){
  
    const numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    
    const result = [];
    
    let remainder = number;
    
    for(let i = 0; i < numerals.length; i++){
      
      let count = 0;
      let overCurrent = false
      
      while(remainder >= numerals[i]){
        
        count++;
        
          result.push(numerals[i])
  
          remainder -= numerals[i]
          console.log("count:", count)
        
      }
    }
  
    const final = result.map((num) => {
      
      if(num === 1000) return "M"
      if(num === 900) return "CM"
      if(num === 500) return "D"
      if(num === 400) return "CD"
      if(num === 100) return "C"
      if(num === 90) return "XC"
      if(num === 50) return "L"
      if(num === 40) return "XL"
      if(num === 10) return "X"
      if(num === 9) return "IX"
      if(num === 5) return "V"
      if(num === 4) return "IV"
      if(num === 1) return "I"
      
    })
  
    return final.join("")
  }