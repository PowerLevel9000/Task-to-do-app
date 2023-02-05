export default function displayBooks(bookCollection) {
  const bookList = document.getElementById('list');
  bookList.innerHTML = '';

  const generateBookHTML = (book) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.id = `book-${book.id}`;
    bookDiv.innerHTML = `
      <h2 class="score">${book.title}:</h2>
      <h3 class="name">${book.author}</h3>
    `;
    return bookDiv;
  };

  bookCollection.collection.forEach((book) => {
    bookList.appendChild(generateBookHTML(book));
  });
}
