// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1
const createCounter = function(){
    let i = 0;

    return function(){
        i++
        return i
    }
}


const counter = createCounter();
// console.log(counter()); // Output: 1
// console.log(counter());


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 2
const privateVariable = function(num){
    let numVal = num
        const get = function(){
            return numVal
        }
        const set = function(value){
            numVal = value
            return numVal
        }

        return {
            get,
            set
        }
    
}


// const secretValue = privateVariable(42); 
// console.log(secretValue.get()); // Output: 42 
// secretValue.set(1005); 
// console.log(secretValue.get());


