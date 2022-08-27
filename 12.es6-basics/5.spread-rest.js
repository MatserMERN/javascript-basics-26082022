/*
    ? Spread (...) - Unpacks the elements from an array
    ? Rest(...) - Packs the elements into an array
*/

// spread
// const odd =[1,3,5]
// const combined = [2,4,6, ...odd]
// console.log(combined)

// Rest 

// function display(a,b, ...params){
//     console.log(params)
// }

// display(1,2,3,4,5)

//Constructing array Literal 

// let intialCharacters = ['A', 'B']
// let charsOne = [...intialCharacters, 'C', 'D']
// console.log(charsOne)

// // Copy an array
let scores = [80, 70, 90]
let copiedScores = [...scores]
console.log(copiedScores)

// Spread Operator on String 

let chars = ["A", ..."BC", "D"]

console.log(chars)

// Spread on Objects

var user ={ 
    id: 1,
    name: "Scott"
}

var userObj = {
    ...user,
    city: "Boston"
}

console.log(userObj)