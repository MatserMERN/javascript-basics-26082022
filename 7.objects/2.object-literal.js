var person = {} // Object Literal Syntax


//1st way 
person["firstName"] = "Scott"
person["lastName"] = "Desatnick"

//2nd way 
var cityName ="city"
person[cityName] ="Boston"

//3rd Way 
person.email ="Scott@ef.com"
person.address = {}
person.address.country = "USA"

//4th Way
Object.defineProperty(person, "age", {
    value: 46,
    writable: true
})

person.age = 50

console.log(person)
console.log(person.firstName)
console.log(person["lastName"])
console.log(person["cityName"])
console.log(person.address.country)

var student = {
    id: 1,
    name: "Scott",
    isAdmin: true,
    department: null,
    grade: undefined,
    getName: function(){
        return this.name
    },
    address: {
        city: "boston"
    },
    subjects: ["JavaScript", "ReactJS", "NodeJS"],
    age: 46
}

// CRUD 
Object.freeze(student)

student.name ="Great Scott" // UPDATE
student.email = "scott@ef.com" // CREATE
delete student.age // DELETE
console.log(student) // READ