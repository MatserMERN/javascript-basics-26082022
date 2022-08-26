/*

    * "async and await make promises easier to write"
    ? async makes a function return a Promise
    ? await makes a function wait for a Promise
*/

function getNumbers(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
           resolve("Two") 
        }, 2000)
    })
}

async function printNumbers(){
    console.log("One")
    var two = await getNumbers()
    console.log(two)
    console.log("Three")
}

printNumbers()



async function myFunction1() {
    return "Hello One";
  }
  
  function myFunction2() {
    return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve("Function took some time")
            }, 2000)
    })
  }
  
  async function myFunction3() {
    return "Hello Three";
  }
  async function getMessages(){
  
      var messageOne1 = await myFunction1()
      var messageOne2 = await myFunction2()
      var messageOne3 = await myFunction3()
      console.log(messageOne1)
      console.log(messageOne2)
      console.log(messageOne3)
  }
  
  getMessages()