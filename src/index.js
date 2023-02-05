import './style.css';
import { clearLocalStorage } from './modules/refresh.js';
import BookCollection from './modules/BookCollection.js';
import displayBooks from './modules/display.js';

const bookCollection = new BookCollection();
displayBooks(bookCollection);

const addBookForm = document.getElementById('add-form');
const bookTitleInput = document.getElementById('name');
const authorNameInput = document.getElementById('score');

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  bookCollection.add(bookTitleInput.value, authorNameInput.value);
  displayBooks(bookCollection);
  bookTitleInput.value = '';
  authorNameInput.value = '';
});

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', () => {
  clearLocalStorage();
  displayBooks(bookCollection);
});
