// let add = function(x,y){
//     return x+y
// }

/*
 ?  () => { return x+ y}
 ?  () => x+ y
*/

// let add = (x,y) =>{
//     return x+y
// }

//let add = (x,y) => { x+y} // Return keyword is mandatory


// let add = (x,y) => x+y
// console.log(add(10,20))

let numbers = [4,2,6, 10, 20, 4, 6, 7, 17, 8, 9, 21]
// numbers.slice().reverse().forEach(x =>console.log(x))

// sort an array
// numbers.sort((a,b) =>{
//     console.log(a, b)
//     return b-a
// })
// console.log(numbers)

// With No parameters
let logDoc = () => console.log(window.document)

logDoc()

// Line Break 

// let multiply = (x,y)  // SyntaxError: Unexpected token '=>'
// => x * y

let multiply = (x,y) => // Valid Syntax
x * y

console.log(multiply(4,5))

// Object Literal 

// let setcolor = function(color){
//     return {value: color}
// }

let setcolor = (color) => ({value: color})

let backGroundColor = setcolor('Green')

console.log(backGroundColor)