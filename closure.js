// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
3

const createCachingFunction = function(){
    let obj = {}
    return function(num){
        let multi = num * 2
        if(obj.length === 0){
            obj[num] = num
            return `${multi} (calculated)`
        }else{
            if(num in obj){
                return `${multi} (cached)`
            }else{
                
                obj[num] = num
                return `${multi} (calculated)`
            }
            
        }

    }
}


const cachedCalculation = createCachingFunction(); 
// console.log(cachedCalculation(5)); // Output: 10 (calculated)
// console.log(cachedCalculation(6));
// console.log(cachedCalculation(5));



