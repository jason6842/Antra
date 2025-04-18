class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
    // Override the Book getSummary
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year} and it was published in ${this.month}`;
    }
}

// Instantiate Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');
console.log(mag1);
console.log(mag1.getSummary()); // This will work because the getSummary method is inherited from the Book class