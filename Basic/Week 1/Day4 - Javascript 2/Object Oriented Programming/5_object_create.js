// Object of Protos (RARE)
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// Create Object
const book1 = Object.create(bookProtos);

// Add Properties
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = '2013';

console.log(book1); // This will show an object with the properties title, author, and year

// Another way to create an object
const book2 = Object.create(bookProtos, {
    title: {value: 'Book Two'},
    author: {value: 'Jane Doe'},
    year: {value: '2016'}
})

console.log(book2); // This will show an object with the properties title, author, and year