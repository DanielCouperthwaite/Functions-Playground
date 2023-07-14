
export default function checkIfIdentical(obj1, obj2) {


    let result = true

    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        
        result = false
    } else {

        for(const key in obj1){

        if (typeof obj1[key] === 'object'){
            if(checkIfIdentical(obj1[key], obj2[key]) === false){
               
                return false
            } 
        } else if(obj1[key] !== obj2[key]){
                    
                    return false
                }
            
        } 
        
    }

    return result

}
