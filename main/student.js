let Person = require('./person')
// Write your code here
function Student (name, age, Class){
    this.class= 2,
    this.name = "朱一百",
    this.age = "100",
    this.introduce = function(){
        return "My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
    }
}
module.exports = Student
