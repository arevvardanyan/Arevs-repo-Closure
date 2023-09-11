// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 7

function createCalculator(str){

    switch(str){
        case "add":
            return function(a,b){
                return a+b
        };
        case "multiply":
            return function(a,b){
                return  a * b
        }
    }
        
    
}

const multiply = createCalculator("add"); 
// console.log(multiply(2,8))


