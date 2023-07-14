
export default function checkIfIdentical(obj1, obj2) {


    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false
    } else {

        for(const key in obj1){

        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object'){
            if(checkIfIdentical(obj1[key], obj2[key]) === false){
                return false
            } 
        } else if(obj1[key] !== obj2[key]){
                    return false
                }
            
        } 
        
    }

    return true

}
