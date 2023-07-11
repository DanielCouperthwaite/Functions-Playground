

function updateInventory(arr1, arr2) {

    const array1 = [...arr1]
    const array2 = [...arr2]

    let found = []
    for(let k = 0; k < array1.length + array2.length; k++){
        found.push(false)
    }

    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
        
        if(array1[i][1] === array2[j][1] && found[i] === false){
            array1[i][0] += array2[j][0]
            found[i] = true
        } else if(!array1[i][1] === array2[j][1] && found[i] === false) {
            array1.push(array2[j])
            found[i] = true
        
        } 
    }
    }

    array2.forEach((item) => {
        if(!array1.join().includes(item[1])){
            array1.push(item)
        }
    })
        
    array1.sort(([a, b], [c, d]) => {
        if (b > d) return 1;
        if (b < d) return -1;
    });

    return array1
}

module.exports = updateInventory;