// prototype vs __proto__ vs prototype chain
const dude = {};
console.log(dude); // {}
dude.name = 'Amy';
dude.age = '30';
console.log(dude); // { name: 'Amy', age: '30' }

console.log(dude.toString) // ƒ toString() { [native code] }
console.log(dude.valueOf) // ƒ valueOf() { [native code] }

// __proto__ points to Object that has all the methods that the variable is going to inherit from

// Prototype Chain
const myBrothers = ['Ben', 'Sam'];
console.log(myBrothers); // instance of Array constructor

const name = 'Sam';
console.log(name.__proto__); // instance of String constructor
// String.prototype is the prototype of the string object and 
// String's prototype is an inheritance from Object's prototype, much similar to a {}'s prototype

const human = {
    kind: 'Human'
}

const sina = Object.create(human); // kind is a property of human object and human is a property of Object
console.log(sina);
sina.age = 34;
console.log(sina); // { age: 34 }
console.log(sina.kind); // Human

const ben = Object.create(sina); // kind is a property of sina object and sina is a property of human object and human is a property of Object
console.log(ben);
ben.age = 12;
console.log(ben); // { age: 12 }
console.log(ben.kind); // Human
console.log(ben.__proto__.age); // 34

// Class Inheritance
class Human {
    talk() {
        return 'Talking';
    }
}

class SuperHuman extends Human {
    fly () {
        return 'Flying';
    }
}

// superman is an instance of SuperHuman with fly() and its __proto__ is of type Human with walk() and its prototype is of type Object
const superman = new SuperHuman(); // instance of SuperHuman
console.log(superman); // SuperHuman {}
console.log(superman.fly()); // Flying
console.log(superman.talk()); // Talking

// If we look up a property of an object, it will first look up in the object itself, then in its __proto__ and then in its prototype
// It keeps going down the prototype chain until it finds the property or reaches the end of the chain

// prototype doesn't belong to any objects or instances, it belongs to the constructor functions or classes
// Only objects and instances have __proto__ property

function Dude(name) {
    this.name = name;
}

const me = new Dude('Jason');
console.log(me); // Dude { name: 'Jason' }
console.log(me.prototype); // undefined - prototype is not a property of an instance
console.log(Dude.prototype); // Dude {} - prototype is a property of the constructor function

console.log(me.__proto__); // Dude {} - __proto__ is a property of an instance

console.log(me.__proto__ === Dude.prototype); // true - __proto__ of an instance is the same as the prototype of the constructor function

Dude.prototype.talk = function() {
    return 'Talking';
}

me.talk(); // Talking
console.log(me.__proto__); // { talk: [Function] }

// __proto__ is a property of every variable that points to the parent object that is inherited from

// prototype is a property on the constructor function that contains all the stuff that will be inherited by its instance

// They are all the same thing, but accessed from different ends 

// const me = {}; === const me = new Object(); // same thing
const me1 = {};
const me2 = new Object();
console.log(me1.__proto__ === me2.__proto__); // true
console.log({}.__proto__ === new Object().__proto__); // true

function Class(name) {
    this.name = this.name;
}

const instance = new Class('Jason');
console.log(instance.__proto__); // Class {}
console.log(instance.prototype); // undefined
console.log(Class.prototype); // Class {}
console.log(Class.__proto__); // ƒ () { [native code] } - a built in JavaScript function 