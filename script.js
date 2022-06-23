let myLibrary = [];

class Book {
  constructor(title, author, pages, isRead) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.isRead = isRead);
  }
}

const addBtn = document.querySelector(".add-btn");
const bookName = document.querySelector("#book");
const authorName = document.querySelector("#author");
const pagesOfBook = document.querySelector("#pages");
const readBook = document.querySelector("#read");

//Click the addBtn to submit bookName, authorName, pagesOfBook into the .main-page with the .book-updated styling

function addBookToLibrary() {
  addBtn.addEventListener("click");
}
