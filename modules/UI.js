import Store from './store.js';

export default class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const bookDisplay = document.createElement('div');
    bookDisplay.className = 'bookList1';
    bookDisplay.innerHTML = `
          <p class="bookTitle"><b>${book.title}</b></p>
          <p>by<span></span><b>${book.author}.</b></p>
          <button class="delete">Remove</button>
          `;

    list.appendChild(bookDisplay);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
