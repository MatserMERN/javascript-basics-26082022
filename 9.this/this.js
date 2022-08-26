console.log(this)

function sample(){
    console.log(this)
}

sample()

// var obj = {
//     fname: "Scott",
//     getName: function(){
//         console.log(this)
//         this.fname ="Great Scott"
//         console.log(this)

//         var updateName = function(){
//             this.fname ="Desatnick"
//             console.log(this)
//         }

//         updateName()
//     }
// }

// obj.getName()

// var obj = {
//     fname: "Scott",
//     getName: function(){
//         var self = this

//         console.log(self)
//         self.fname ="Great Scott"
//         console.log(self)

//         var updateName = function(){
//             self.fname ="Desatnick"
//             console.log(self)
//         }

//         updateName()
//     }
// }

// obj.getName()

// Using bind, call, apply
var obj = {
    fname: "Scott",
    getName: function(){
        console.log(this)
        this.fname ="Great Scott"
        console.log(this)

        var updateName = function(){
            this.fname ="Desatnick"
            console.log(this)
        }

        //updateName.bind(this)()
        //updateName.call(this)
        updateName.apply(this)
    }
}

obj.getName()

