// function getValue(){
//     //return 1
//     //return "Scott"
//     //return true
//    // return null
//    //return undefined
//    //return {}
//    //return function(){}
//    //return []
//    //return
// }

// console.log(getValue())

function getName(firstName, lastName){
    return firstName + " " + lastName
}

function getName(firstName){
    return firstName + " " 
}
function getName(){
    return  " " 
}

console.log(getName("Scott", "Desatnick"))
console.log(getName("Adam", "colson"))
console.log(getName("Tuan", "Bui"))

// Function Overloading  - This is not allowed in javascript
// Function Overriding - This is possible