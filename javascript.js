
let myLibrary = [];
addBookToLibrary('title', 'author', 'pages', 'Yes');
addBookToLibrary('test', 'test', 124, 'No');
console.log(myLibrary)

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = myLibrary.length;
};

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    addBookToTable(book);
};


function addBookToTable(book) {
    const tr = document.createElement('tr');

    // Create the four td elements
    const [title, author, pages, read, deleteElement] = Array(5).fill().map(() => {
        return document.createElement('td');
    });

    title.innerText = book.title;
    author.innerText = book.author;
    pages.innerText = book.pages;
    read.innerText = book.read;

    // Delete button in table
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete book";
    deleteBtn.className = "red deletebook";
    deleteBtn.addEventListener('click', () => handleDeleteBook(book, tr));
    deleteElement.append(deleteBtn);

    tr.append(title, author, pages, read, deleteElement);
    tableBody.append(tr);
}

// Delete book from myLibrary and remove the table row 'tr' that contains the book
function handleDeleteBook(book, tr) {
    myLibrary = myLibrary.filter((bookInLibrary) => {
        return bookInLibrary.id !== book.id;
    });
    console.log(myLibrary)
    tr.remove();
}

document.addEventListener('DOMContentLoaded', () => {

    // Open form to create book
    const dialog = document.querySelector('dialog');
    const addBookBtn = document.querySelector('#showForm');
    addBookBtn.addEventListener('click', () => {
        dialog.showModal();
    })

    // Close book
    const closeForm = document.querySelector('#closeForm');
    closeForm.onclick = () => {dialog.close()};

    // Create book
    const createBook = document.querySelector('#createBook');
    createBook.addEventListener('click', (e) => {
        e.preventDefault();
        const title = dialog.querySelector('#title').value;
        const author = dialog.querySelector('#author').value;
        const pages = dialog.querySelector('#pages').value;
        const read = dialog.querySelector('#read') === 'true' ? "Yes" : "No";
        addBookToLibrary(title, author, pages, read);
        console.log(myLibrary)
        dialog.close();
    });
})