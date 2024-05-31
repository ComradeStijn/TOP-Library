
const myLibrary = [];
addBookToLibrary('title', 'author', 'pages', 'read');
addBookToLibrary('test', 'test', 'test', 'test');

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
    for (const book of myLibrary) {
        console.log(book);
    }
}

queryBooks();