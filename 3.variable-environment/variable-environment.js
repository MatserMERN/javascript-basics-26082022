// function b(){
//     var x
// }

// function a(){
//     var x =2
//     b()
// }

// var x =1;
// a()
// console.log(x)

// 1 

function b(){
    var myvar
    console.log(myvar)
}

function a(){
    var myvar =2
    console.log(myvar)
    b()
}

var myvar =1
console.log(myvar)
a()
console.log(myvar)


// 1, 2, undefined, 1