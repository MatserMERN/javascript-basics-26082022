// function sample(){
//     return "Hello"
// }
// Function Expression // Anonymous Function
var sample = function (){
    return "Hello"
}

console.log(sample())

var getFullName = function(firstName, lastName){
    return firstName + " " + lastName
}
 
console.log(getFullName("Scott", "Desatnick"))

var display = function test(){
    return "This is display function"
}

console.log(display())
//console.log(display.test())
//console.log(test)