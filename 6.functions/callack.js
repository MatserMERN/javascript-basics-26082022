function display(value){
   value()
}

var test = function(){

}

display(test)
// Function being passed as a paramter to another function
display(function(){

})