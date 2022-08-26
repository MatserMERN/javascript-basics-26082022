// (function () {
//     console.log("Hello, here is your message")
// })();

// (function () {
//     console.log("Hello, here is your message")
// }());

// (function (name) {
//     console.log(name)
// })("Scott");

// var getName = (function (name) {
//     return name
// })("Scott");

// console.log(getName)

// var getConfirmation = (function confirm(){
//     return "Hello"
// })()

// console.log(getConfirmation)

// function Student(){

// }

// var student = new Student()
// console.log(student)

var Database = (function (){
    var connection = null

    var createConnection = function(){
        var obj ={}
        console.log('Created new connection object')
        return obj
    }

    var getConnection = function(){
        if(!connection){
            connection = createConnection()
        }
        return connection
    }

    return {
        getConnection: getConnection
    }
})()

var dbCon1 = Database.getConnection()
console.log(dbCon1)
var dbCon2 = Database.getConnection()
console.log(dbCon2)

