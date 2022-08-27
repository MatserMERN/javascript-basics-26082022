class Student {
    constructor(firstName, lastName){
        this.firstName= firstName
        this.lastName = lastName
    }

    getFullName(){
        return this.firstName + " " + this.lastName
    }

    getData(){
        return "Here is your data"
    }

    getFinalData(){
        return this.getData()
    }

}

var studentObj = new Student("Scott", "Desatnick")
console.log(studentObj)
console.log(studentObj.getFullName())
console.log(studentObj.getData())
console.log(studentObj.getFinalData())
