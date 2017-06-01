let Person = require('./person')
// Write your code here
function Student (name, age, Class){
    Person.call(this);
    this.klass= Class;
    this.name = naem;
    this.age = age;
    this.introduce = function(){
        return "My name is "+this.name+". I am 21 "+this.age+"years old. I am a Student. I am at Class "+this.klass+"2.";
    }
}
module.exports = Student
