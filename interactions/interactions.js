// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Add Book to UI
    UI.addBookToList(book);

    // Clear fields
    UI.clearFields();
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    // Remove book from UI
    UI.deleteBook(e.target);
});