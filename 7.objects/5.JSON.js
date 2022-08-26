var post = {
	"userId": 1,
	"id": 1,
	"title": "sunt aut facere repellat",
	"body": "quia et suscipit\nsuscipit "
}

var person = {
    firstName: "Scott",
    lastName: "Desatnick"
}

var personStringify = JSON.stringify(person)

console.log(personStringify, typeof personStringify)

var personParse = JSON.parse(personStringify)

console.log(personParse, typeof personParse)