// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 4

const createPerson = function(name,age){
    let nameSet = name;
    let ageSet = age
    const getName = function(){
        return nameSet
    }
    const getAge = function(){
        return ageSet
    }
    const setName = function(name){
        nameSet = name
        return nameSet
    }
    const setAge = function(age){
        ageSet = age
        return ageSet
    }

    return {
        getName,
        getAge,
        setName,
        setAge
    }
}

// const person = createPerson("Alice", 30); 
// console.log(person.getName()); // Output: "Alice"
// console.log(person.getAge()); // Output: 30 
// person.setName("Bob"); 
// person.setAge(25); 
// console.log(person.getName()); // Output: "Bob"
// console.log(person.getAge());


