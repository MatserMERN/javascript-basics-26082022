var person = new Object()

//1st way 
person["firstName"] = "Scott"
person["lastName"] = "Desatnick"

//2nd way 
var cityName ="city"
person[cityName] ="Boston"

//3rd Way 
person.email ="Scott@ef.com"
person.address = new Object()
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



