// Prior ES6 for string values we used single (') or double quotes (")

let messageOne = "Welcome to the world \n" + 
"of strings \n" +
"in ES5"

console.log(messageOne)

// ES6 way

let messageTwo = `Welcome to the 
world of strings 
in ES6`

console.log(messageTwo)

let firstName ="Scott", 
    lastName ="Desatnick"

console.log('FirstName: %s, LastName: %s', firstName, lastName)


console.log(`FirstName: ${firstName}, lastName: ${lastName}`)

// Defaut Parameter

function Say(message="Hi"){
    console.log(message)
}

Say("Hello")

