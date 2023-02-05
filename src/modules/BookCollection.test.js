import BookCollection from './BookCollection.js';

describe('BookCollection', () => {
  let bookCollection;

  beforeEach(() => {
    bookCollection = new BookCollection();
    jest.spyOn(Date, 'now').mockReturnValue(1);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('adds a new book to the collection', () => {
    bookCollection.add('Title', 'Author');
    expect(bookCollection.collection).toHaveLength(1);
    expect(bookCollection.collection[0]).toMatchObject({
      title: 'Title',
      author: 'Author',
      id: 1,
    });
  });
});
