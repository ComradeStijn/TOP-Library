
let myLibrary = [];


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
    const [title, author, pages, deleteElement, changeElement] = Array(5).fill().map(() => {
        return document.createElement('td');
    });
    let read = document.createElement('td'); // Can change status
    title.innerText = book.title;
    author.innerText = book.author;
    pages.innerText = book.pages;
    read.innerText = book.read;

    pages.style.fontSize = '2rem';
    pages.style.textAlign = 'center';
    read.style.fontSize = '2rem';
    read.style.textAlign = 'center';

    // Delete button in table
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete book";
    deleteBtn.className = "red deletebook";
    deleteBtn.addEventListener('click', () => handleDeleteBook(book, tr));
    deleteElement.append(deleteBtn);

    // Change read status button
    const changeReadBtn = document.createElement('button');
    changeReadBtn.innerText = "Change Read Status";
    changeReadBtn.className = "red changereadbook";
    changeReadBtn.addEventListener('click', () => changeReadBook(book, read));
    changeElement.append(changeReadBtn);


    tr.append(title, author, pages, read, deleteElement, changeElement);
    tableBody.append(tr);
}

// Function to change read status in column

function changeReadBook(book, element) {
    if (book.read === "Yes") {
        book.read = "No";
        element.innerText = "No";
    } else {
        book.read = "Yes";
        element.innerText = "Yes";
    }
}

// Delete book from myLibrary and remove the table row 'tr' that contains the book
function handleDeleteBook(book, tr) {
    myLibrary = myLibrary.filter((bookInLibrary) => {
        return bookInLibrary.id !== book.id;
    });
    tr.remove();
}



// 
// DOMContentLoaded
// 
// 

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
    });
});



