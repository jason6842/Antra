const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

// Array Destructuring
// const a = alphabet[0];
// const b = alphabet[1];
const [a, b, c] = alphabet;

console.log(a); // A
console.log(b); // B
console.log(c); // C

const [x,, z] = alphabet;  // x = A, z = C, skip B

console.log(x); // A
console.log(z); // C

const [j,, k, ...rest] = alphabet;
console.log(j); // A
console.log(k); // C
console.log(rest); // ['D', 'E', 'F']

// combine two arrays
const newArray = [...alphabet, ...numbers];
console.log(newArray); // ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6']
const newArray1 = alphabet.concat(numbers);
console.log(newArray1); // ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6']

function sumAndMultiply(a, b) {
    return [a+b, a*b];
}

const array = sumAndMultiply(2, 3); // [5, 6]
console.log(array);

const [sum, multiply, division = "No division"] = sumAndMultiply(3, 4);
console.log(sum); // 7
console.log(multiply); // 12
console.log(division); // No division

// Object Destructuring
const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    address: {
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}

const {name, age} = personOne;
console.log(name); // Kyle
console.log(age); // 24

const {name: name1 = 'John', age: age1, favoriteFood = 'rice'} = personTwo;
console.log(name1); // Sally
console.log(age1); // 32
console.log(favoriteFood); // Somewhere else

const {name: firstName, ...rest1} = personTwo;
console.log(firstName); // Sally
console.log(rest1); // {age: 32, address: {city: 'Somewhere else', state: 'Another one of them'}} - rest of the object

// Nested Object Destructuring
const {name: name2, age: age2, address: { street, city, state }} = personOne;
console.log(name2); // Kyle
console.log(age2); // 24
console.log(street); // undefined
console.log(city); // Somewhere
console.log(state); // One of them

const personOneUpdatedAttributes ={
    age: 32,
    favoriteFood: "Watermelon",
}

const personOneUpdated = {...personOne, ...personOneUpdatedAttributes};
console.log(personOneUpdated); // {name: 'Kyle', age: 32, address: {city: 'Somewhere', state: 'One of them'}, favoriteFood: 'Watermelon'}

const personOneUpdatedReverse = {...personOneUpdatedAttributes, ...personOne };
console.log(personOneUpdatedReverse); // {age: 24, favoriteFood: 'Watermelon', name: 'Kyle', address: {city: 'Somewhere', state: 'One of them'}}
// It firsts adds the age: 32 and favoriteFood: "Watermelon", and then adds the rest of the properties of personOne object
// but the order doesn't change, but values gets updated with new values of personOne


// Destructuring function arguments - MOST USEFUL WITH REACT
// function printUser(user) {
//     console.log(user);
// }

function printUser(user) {
    console.log(`Name is ${user.name}, age is ${user.age}.`);
}

// Destructuring the object in the function argument
function printUser({name, age, favoriteFood = 'Watermelon'}) {
    console.log(`Name is: ${name}, age is: ${age}. Favorite food is ${favoriteFood}.`);
}


printUser(personOne); // {name: 'Kyle', age: 24, address: {city: 'Somewhere', state: 'One of them'}}