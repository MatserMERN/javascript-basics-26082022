// Array De-structuring

let arr = ["Scott", "Adam", "Tuan"]

let [name1, name2, name3] = arr

console.log(name1) // arr[0]
console.log(name2) // arr[1]
console.log(name3) // arr[2]

// Split Method

let [firstName, lastName] = "Scott Desatnick".split(" ")
console.log(firstName)
console.log(lastName)

let [fname,,,title] = ["Scott", "Desatnick", "Mr."]

console.log(fname)
//console.log(lname)
console.log(title)

// Object Destructuring 

let user = {
    name: "Scott",
    age: 46
}

let {nameOne, age} = user
console.log(nameOne)
console.log(age)