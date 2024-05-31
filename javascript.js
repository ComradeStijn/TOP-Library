
const myLibrary = [];
addBookToLibrary('title', 'author', 'pages', 'Yes');
addBookToLibrary('test', 'test', 'test', 'No');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    return myLibrary.push(book);
};

function queryBooks() {
    const tableBody = document.querySelector('#tableBody');
    for (const book of myLibrary) {
        const tr = document.createElement('tr');

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
}

document.addEventListener('DOMContentLoaded', () => {
    queryBooks();
})