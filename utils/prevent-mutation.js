

export default function preventMutation(input) {

    if(Array.isArray(input)){
        input = [...input]
    } else if (typeof input === 'object'){
        input = {...input}
    }
        
        

    for(let key in input){
        if(typeof input[key] === 'object' || Array.isArray(input))
            input[key] = preventMutation(input[key])
    }


    
    return input
}