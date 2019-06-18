// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI() { }

// Clear Fields
UI.prototype.clearFields = function () {
    document.getElementById('title').value;
    document.getElementById('author').value;
    document.getElementById('isbn').value;
}

// Add Book Object
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    // Create TR element.
    const row = document.createElement('tr');

    // Inserting values
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class = "delete"> X </a></td>
    `

    list.appendChild(row);
}

// Delete Book
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

// Show alert 
UI.prototype.showAlert = function (message, className) {

    // Create Div
    const div = document.createElement('div');

    // Add classes
    div.className = `alert ${className}`;

    // Add text
    div.appendChild(document.createTextNode(message));

    // Get Parent and append
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    // Timeout after 2 seconds.
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 2000);
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {

    // Getting form elements
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Creating book object.
    const book = new Book(title, author, isbn);
    console.log(book);

    // Creating UI object.
    const ui = new UI();

    // Validate
    if (title === '' || isbn === '' || author === '') {
        ui.showAlert('Please fill in all fields', 'error');
    }
    else {

        // Add book to list;
        ui.addBookToList(book);

        // Show success
        ui.showAlert('Book Added! ', 'success');

        e.preventDefault();
    }
});

// Event Listeners for deleting a book
// Parent needs to be accessed --- Event delegation
document.getElementById('book-list').addEventListener(
    'click', function (e) {
        const ui = new UI();
        ui.deleteBook(e.target);
        ui.showAlert('Book removed', 'success');
        e.preventDefault();
    }
);