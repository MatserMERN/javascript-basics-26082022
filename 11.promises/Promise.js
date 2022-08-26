// Promises

function getNumbers(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
           resolve("Two") 
        }, 2000)
    })
}

console.log("One")
getNumbers().then(function(data){
    console.log(data)
    console.log("Three")
})


function GetStudentData(){
    return new Promise(function(resolve, reject){
        var count =1
        if(count> 0){
            setTimeout(function(){
                resolve("Finally we got the student data")
            }, 3000)
        } else {
            reject("No Data Available")
        }

    })
}

GetStudentData()
.then(function(data){
    console.log(data)
    return data + "Hello"
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})