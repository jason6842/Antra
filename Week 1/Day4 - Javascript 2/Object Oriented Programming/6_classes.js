class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    // Static Method (This method can be called without instantiating an object)
    static topBookStore() {
        return 'Barnes & Noble';
    }
}

// Instantiate Object
const book1 = new Book('Book One', 'John Doe', '2013');

console.log(book1);
book1.revise('2018');
console.log(book1); // This will show the book1 object with the revised property set to true

// book1.topBookStore(); // This will throw an error because topBookStore is a static method and can't be called on an instance of the Book object
console.log(Book.topBookStore()); // This will return 'Barnes & Noble'