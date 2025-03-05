export class Book {

    constructor(name, autor, year) {
        this.bookName = name;
        this.bookAutor = autor;
        this.bookYear = year
    }

    get bookName() {
        return this._name;
    }
    get bookAutor() {
        return this._autor;
    }
    get bookYear() {
        return this._year;
    }

    set bookName(name) {
        if ((typeof name === 'string') && name != "") {
            this._name = name;
        } else {
            throw new Error("Incorrect data 'name' entered!");
        }
    }

    set bookAutor(autor) {
        if ((typeof autor === 'string') && autor != "") {
            this._autor = autor;
        } else {
            throw new Error("Incorrect data 'autor' entered!");
        }
    }
    set bookYear(year) {
        if ((typeof year === 'number')) {
            this._year = year;
        } else {
            throw new Error("Incorrect data 'year' entered!");
        }
    }

    printInfo() {
        console.log(`Book: "${this._name}", autor: ${this._autor}, year: ${this._year}.`);
    }

    static bookSelect(booksArray) {
        const old = booksArray.reduce(
            (prev, current) => {
                return prev._year < current._year ? prev : current
            }
        );
        console.log(`The oldest book is "${old._name}". The year of publication of the book: ${old._year}.`);
    }

}