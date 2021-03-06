// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // debugger;
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    // To use FormData you need to make sure all your input elements have a name attribute.
    const formData = new FormData(e.target);

    const title = formData.get('title');
    const author = formData.get('author');
    const isbn = formData.get('isbn');

    // const title = document.querySelector('#title').value;
    // const author = document.querySelector('#author').value;
    // const isbn = document.querySelector('#isbn').value;

    // Validate
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
        // Instantiate book
        const book = new Book(title, author, isbn);

        // Add Book to UI
        UI.addBookToList(book);

        // Add book to store
        Store.addBook(book);
        UI.displayBooks();

        // Show success message
        UI.showAlert('Book Added', 'success');

        // Clear fields
        UI.clearFields();
    }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    // debugger
    if (e.target.classList.contains('delete')) {
        // Remove book from UI
        UI.deleteBook(e.target);

        // Remove book from store
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
        UI.displayBooks();

        // Show success message
        UI.showAlert('Book Removed', 'success');
    }
});