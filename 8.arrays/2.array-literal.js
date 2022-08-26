var students = [] // Array Literal Syntax
students[0] = "Scott"
students[1] = "Adam"
students[2] = "Tuan"
students[4] = "Uma"
console.log(students)
console.log(students[3])

var people = ["Scott", "Adam", "Tuan"]
people[3] = "Uma"
people[5] = "Johngalt"
console.log(people)

var data = [
    1,
    "Scott",
    true,
    null,
    undefined,
    {name: "Scott"},
    function(name){
        return name
    },
    ["Red" ,"Green", "Blue"]
]

// access object get the name
// access the function paas the object name as paremeter
// Print "Scott"
// Print "Scott Likes Blue"

console.log(data[5].name)
console.log(data[6](data[5].name))

console.log(data[6](data[5].name) + " Likes " + data[7][2])