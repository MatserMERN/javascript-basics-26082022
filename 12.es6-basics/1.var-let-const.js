//var name ="Hey" // Global to the function

// function sample(){
//     var foo = "hello"
//     console.log(foo)
//     var name ="Hey" // Local to the function
// }

// sample()
// console.log(foo)

// hello , error

function display(){
    if(true){
        var foo ="Hello"
        let bar = "How are you"
        const baz ="I am fine"

        console.log(foo)
        console.log(bar)
        console.log(baz)
    }

    console.log(foo)
   // console.log(bar)
   // console.log(baz)
}

//display()

// for(var i=0; i<3; i++){
//     console.log(i)
// }
// console.log(i)
// 0, 1, 2, 3

// for(let i=0; i<3; i++){
//     console.log(i)
// }
// console.log(i)

function test(){
    let foo =1
        foo ="Hello"
    
    //let foo ="101"
    console.log(foo)

    const bar ="Hey"
          //bar ="Hola"
    
    console.log(bar)
}

test()
// let foo ="Scott"
// console.log(foo)

const students = ["Scott", "Adam", "Tuan"]
students.push("Uma")

console.log(students)