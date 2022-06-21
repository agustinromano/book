let myLibrary = [];

class Book {
  constructor(title, author, pages, isRead) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.isRead = isRead);
  }
}

function addBookToLibrary() {
  // do stuff here
}

const addBook = document.querySelector(".addBook");
