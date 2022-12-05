import Store from './modules/store.js';
import UI from './modules/UI.js';
import Book from './modules/books.js';
import { DateTime } from './modules/Luxon.js';
import createDate from './modules/Date.js';

const bookList = document.querySelector('.list-holder');
const list = document.querySelector('.list');
const formContainer = document.querySelector('.form-container');
const contactInfo = document.querySelector('.contact-info');

list.addEventListener('click', () => {
  bookList.style.display = 'block';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'none';
});

window.addEventListener('load', () => {
  bookList.style.display = 'block';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'none';
});

const addNewBtn = document.querySelector('.add');

addNewBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'block';
  contactInfo.style.display = 'none';
});

const contactBtn = document.querySelector('.contact');

contactBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Instatiate book
  const book = new Book(title, author);

  // Add Book to UI
  UI.addBookToList(book);

  // Add book to store
  Store.addBook(book);

  // Clear fields
  UI.clearFields();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.previousElementSibling.previousElementSibling.textContent);
});

createDate(DateTime);
// setInterval(() => { createDate(DateTime); }, 5000);
