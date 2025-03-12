// Inheritance
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;

}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine; // This is necessary because the constructor of Magazine is Book, so we need to change it to Magazine

console.log(mag1);
console.log(mag1.getSummary()); // This will throw an error because getSummary is not a method of the Magazine object