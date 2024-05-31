
const myLibrary = [];
addBookToLibrary('title', 'author', 'pages', 'Yes');
addBookToLibrary('test', 'test', 124, 'No');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = myLibrary.length;
};

function addBookToLibrary(title, author, pages, read, id) {
    const book = new Book(title, author, pages, read, id);
    addBookToTable(book);
    return myLibrary.push(book);
};

// function queryBooks() {
//     const tableBody = document.querySelector('#tableBody');
//     for (const book of myLibrary) {
//         addBookToTable(book);
//     }
// }

function addBookToTable(book) {
    const tr = document.createElement('tr');
    tr.dataset.id = book.id;

    // Create the four td elements
    const [title, author, pages, read] = Array(4).fill().map(() => {
        return document.createElement('td');
    });

    title.innerText = book.title;
    author.innerText = book.author;
    pages.innerText = book.pages;
    read.innerText = book.read;

    tr.append(title, author, pages, read);
    tableBody.append(tr);
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

        dialog.close();
    })
})