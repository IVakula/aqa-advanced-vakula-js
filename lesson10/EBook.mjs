import { Book } from "./Book.mjs";

export class EBook extends Book {
    constructor(name, autor, year, fileFormat) {
        super(name, autor, year);
        this._fileFormat = fileFormat;
    }

    get bookFileFormat() {
        return this._fileFormat;
    }

    set bookFileFormat(fileFormat) {
        if (typeof fileFormat === 'string' && fileFormat != "") {
            this._fileFormat = fileFormat;
        } else {
            throw new Error("Incorrect data 'fileFormat' entered!");
        }
    }

    printInfo() {
        console.log(`Book: "${this._name}", autor: ${this._autor}, year: ${this._year}, format: ${this._fileFormat}.`);
    }

    static newBookInstance(book, fileFormat) {
        const { bookName, bookAutor, bookYear } = book;
        return new EBook(bookName, bookAutor, bookYear, fileFormat);
    }
}