function one(){
    return function two(){
        return function Three(){
            return "You got the secret key"
        }
    }
}

var function1 = one()
var function2 = function1()
var function3 = function2()
console.log(function3)

var scretIngredient = one()()()
console.log(scretIngredient)

function getMessage(){

    function setmessage(){

        var updateMessage = function(){
            return "Updated the message already"
        }
       
        updateMessage()
    }
    setmessage()
    
   // var messag1 = 
    //var message = setmessage()
   // return message
}

console.log(getMessage())