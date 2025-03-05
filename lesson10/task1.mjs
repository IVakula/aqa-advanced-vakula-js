import { Book } from "./Book.mjs";
import { EBook } from "./EBook.mjs";

//subtask1
const jungleBook = new Book("The Jungle book", "Rudyard Kipling", 1894);
jungleBook.printInfo();

const aliceInWonderland = new Book("Alice`s Adventures in Wonderland", "Lewis Carroll", 1865);
aliceInWonderland.printInfo();
console.log("===============");

//subtask2
const karlsson = new EBook("Karlsson", "Astrid Lindgren", 1974, "pdf");
karlsson.printInfo();
console.log("===============");

//subtask3
jungleBook.bookName = "The Jungle book (new)";
jungleBook.printInfo();
console.log("===============");

//subtask4
Book.bookSelect([jungleBook, aliceInWonderland, karlsson]);
console.log("===============");

//subtask5
const newBook = EBook.newBookInstance(jungleBook, "pdf");
newBook.printInfo();