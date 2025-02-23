// Basic Literals
const s1 = 'Hello';
console.log (typeof s1); // string

const s2 = new String('Hello');
console.log(typeof s2); // object

console.log(window);
// window.alert(1);
// alert(2);
console.log(navigator.appVersion);


// Object Literals
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book1);
console.log(book1.title);
console.log(book1.getSummary());

console.log(Object.values(book2)); // ['Book Two', 'Jane Doe', '2016']
console.log(Object.keys(book2)); // ['title', 'author', 'year', 'getSummary']




