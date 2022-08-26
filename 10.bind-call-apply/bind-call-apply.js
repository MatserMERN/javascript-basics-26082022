var person1 = {firstName: "Scott", lastName: "Desatnick"}
var person2 = {firstName: "Adam", lastName: "Colson"}
var person3 = {firstName: "Tuan", lastName: "Bui"}

function display(message, city){
   return message + " to " + city + ", " + this.firstName + " " + this.lastName
}

// var displayBind = display.bind(person1, "Welcome", "Boston")
// console.log(displayBind())

var displayBind = display.bind(person1)
console.log(displayBind("Welcome", "Boston"))

var displayCall = display.call(person2, "Welcome", "Sydney")
console.log(displayCall)

var displayApply = display.apply(person3, ["Welcome", "Hanoi"])
console.log(displayApply)