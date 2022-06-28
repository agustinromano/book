// let myLibrary = [];
let library;

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

function addBookToLibrary() {
  addBtn.addEventListener("click", (newBook) => {
    newBook = new Book(bookTitle.value, authorName.value, pagesOfBook.value);
  });
  console.log();
}

const addBtn = document.querySelector(".add-btn");
const bookTitle = document.querySelector("#book-title");
const authorName = document.querySelector("#author");
const pagesOfBook = document.querySelector("#pages");
const readBook = document.querySelector("#read");

//Click the addBtn to submit bookName, authorName, pagesOfBook into the .main-page with the .book-updated styling
