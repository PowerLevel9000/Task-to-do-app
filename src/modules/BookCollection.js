import Book from './Book.js';
import { loadData, saveData } from './localStorage.js';

export default class BookCollection {
  constructor() {
    this.collection = [];
    this.load();
  }

  load() {
    this.collection = loadData('bookCollection').map(
      (book) => new Book(book.title, book.author, book.id),
    );
  }

  add(title, author) {
    const newBook = new Book(title, author, Date.now());
    const newCollection = [...this.collection, newBook];
    saveData('bookCollection', newCollection);
    this.collection = newCollection;
  }
}