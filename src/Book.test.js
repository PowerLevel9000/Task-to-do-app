import Book from './modules/Book.js';

describe('Book', () => {
  let book;

  beforeEach(() => {
    book = new Book('Title', 'Author');
  });

  it('returns the title', () => {
    expect(book.title).toBe('Title');
  });

  it('returns the author', () => {
    expect(book.author).toBe('Author');
  });
});
