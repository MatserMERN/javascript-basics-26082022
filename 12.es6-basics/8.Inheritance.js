class Shape {
    constructor(){

    }

    draw(){
        return "I am generic shape"
    }
}

class Circle extends Shape {
    constructor(){
        super()
    }

    // draw(){
    //     return "I am Circle"
    // }
}

var circleObj = new Circle()
console.log(circleObj)
console.log(circleObj.draw())