export default function topThreeWords(text) {

    const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    const textArr = text.toLowerCase().split(' ')
    const wordArr = []
    
    textArr.forEach((word) => {
      let count = 0;
      let result = [];
      const characters = word.split('')
      characters.forEach((character) => {
        if(alph.includes(character)){
          count++
          }
        if(character !== '/'){result.push(character)}
      })
      if(count > 0){wordArr.push(result.join(''))}
    })
  
    let totalsArr = []
    let uniqueWords = []
    
    wordArr.forEach((word) => {
      if(!uniqueWords.includes(word)){
          const toPush = {letter: word, value: 1}
          totalsArr.push(toPush)
          uniqueWords.push(word)
        } else {
        totalsArr.map((wordObj, index) => {
          if(wordObj.letter === word){
            totalsArr[index]["value"] += 1
          }
        }) 
      } 
    })
    
    const sorted = totalsArr.sort((a, b) => b.value - a.value)
  
    if(sorted.length >= 3){
      return [sorted[0]["letter"], sorted[1]["letter"], sorted[2]["letter"]]
    } else if(sorted.length === 2){
      return [sorted[0]["letter"], sorted[1]["letter"]]
    } else if(sorted.length === 1){
      return [sorted[0]["letter"]]
    } else if(sorted.length === 0){return []}
    
  }