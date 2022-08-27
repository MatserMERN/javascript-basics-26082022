// var employee = {
//     id:1,
//     greet: function(){
//         console.log(this.id)
//     }
// }

// employee.greet()

// Add setTimeout

// var employee = {
//     id:1,
//     greet: function(){
//         setTimeout(function(){
//             console.log(this.id)
//         })
//     }
// }

// employee.greet()

// fix it using self variable

// var employee = {
//     id:1,
//     greet: function(){
//         var self = this
//         setTimeout(function(){
//             console.log(self.id)
//         })
//     }
// }

// employee.greet()

// Using Bind 

// var employee = {
//     id:1,
//     greet: function(){
//         setTimeout(function(){
//             console.log(this.id)
//         }.bind(this))
//     }
// }

// employee.greet()

// USing fat arrow function 

// Execution context for object - Tomorrow 
// var employee = {
//     id:1,
//     greet: function(){
//         setTimeout(() =>{
//             console.log(this.id)

//         })
//     }
// }

// employee.greet()

function sample(){
    "use strict"
    console.log(this) // undefined
}

sample()

