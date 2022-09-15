// *************** Learning Phase 3******************
// ******** 3b **********
// note: run the code below to get some details
// console.log(__dirname, __filename);

// creating class constructor function
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}
module.exports = Person;
// ******** 3a **********
// const person = {
//     name: "John Doe",
//     age: 30
// };

// module.exports = person;