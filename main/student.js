let Person = require('./person')
// Write your code here
function Student (name, age, Class){
    Person.call(this);
    this.klass= Class;
    this.name = name;
    this.age = age;
    this.introduce = function(){
        return "My name is "+this.name+". I am "+this.age+" years old. I am a Student. I am at Class "+this.klass+".";
    }
}
module.exports = Student
