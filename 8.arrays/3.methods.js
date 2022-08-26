// combine two arrays

// var fruits = ["Ornage", "Mango", "Guava"]

// var vegetables = ["potato", "tomato", "Egg Plant"]

// var mixedOne = fruits.concat(vegetables)
// console.log(mixedOne)

// var mixedTwo = vegetables.concat(fruits)
// console.log(mixedTwo)


// // Split
// var names ="Scott Desatnick".split(" ")
// console.log(names)

// // Join
// var movies =["Avatar1" , "Avatar2", "The Martian", "The Shawshank Redemption"]
// console.log(movies.join(","))

// // Push - pop - unshift - shift

// var numbers = [1,2,3]

// // Push
// numbers.push(4)
// numbers.push(5)
// numbers.push(6)

// // Unshift

// numbers.unshift(0)
// numbers.unshift(-1)
// numbers.unshift(-2)

// //pop
// numbers.pop()
// numbers.pop()
// numbers.pop()

// //shift
// numbers.shift()
// numbers.shift()
// numbers.shift()

// console.log(numbers)

// // Splice -Slice

// var fruitsOne = ["Ornage", "Mango", "Guava", "Banana"]
// fruitsOne.splice(2,0,"Lemon", "Kiwi")
// console.log(fruitsOne)

// var fruitsTwo = ["Ornage", "Mango", "Guava", "Banana"]
// fruitsTwo.splice(2,2)
// console.log(fruitsTwo)

// var fruitsThree = ["Ornage", "Mango", "Guava", "Banana"]
// fruitsThree.splice(2,2,"Lemon", "Kiwi")
// console.log(fruitsThree)

// var fruitsFour = ["Ornage", "Mango", "Guava", "Banana"]

// var fruitsFourSlice = fruitsFour.slice(1,3)
// console.log(fruitsFour)
// console.log(fruitsFourSlice)

// Loops

var students = ["Scott", "Adam", "Tuan"]
// for 
// console.log("***** For Loop ******")

// for(var i=0; i<students.length; i++){
//     console.log(i, students[i])
// }

// // Access the values in reverse order using forEach

// console.log("***** ForEach Loop ******")
// // forEach
// students.forEach(function(value, index){
//     console.log(index, value)
// })
// console.log("***** map Loop ******")
// // map
// students.map(function(value, index){
//     console.log(index, value)
// })

// console.log("***** ForEach vs Map Loop ******")
// var studentsForEach = students.forEach(function(value, index){
//     return value + "-" + index
// })

// var studentsMap = students.map(function(value, index){
//     return value + "-" + index
// })

// console.log(studentsForEach)
// console.log(studentsMap)

// for in for
for(var value in students){
    console.log(value)
}

// for of for
for(var value of students){
    console.log(value)
}

// for of 
for(var [index, value] of Object.entries(students)){
    console.log(index, value)
}
