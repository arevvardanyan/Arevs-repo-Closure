// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 5


function add(a = 0, b = 0, c = 0) { 
    return a + b + c; 
} 
function partial(foo,num){
    return function(a,b){
        return foo(num,a,b) 
    }
}
const add5 = partial(add,5);
console.log(add5(10,20))


