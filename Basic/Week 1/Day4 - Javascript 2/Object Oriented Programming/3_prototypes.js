// Prototype
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary is a method that is the same for all instances of the Book object. It is better to use prototype to define this method.
// The reason is that we want title, author, and year for every book, but we don't want a getSummary method for every book.
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// Revise
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book1);
console.log(book2);
console.log(book1.getSummary());

console.log(book2.getAge());
console.log(book2.revise('2018')); // This will add a new property to book2 called revised with a value of true (NOT ALL book)