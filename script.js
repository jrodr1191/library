const myLibrary = [];

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.openModal > button');
const closeModal = document.querySelector('.close');
const addBook = document.querySelector('.add');

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPageNo = document.querySelector('#pageNo');
const bookHasRead = document.querySelector('input[name="hasRead"]');

const container = document.querySelector('.container');

function Book(title, author, pageNo, hasRead) {
    this.title = title;
    this.author = author;
    this.pageNo = pageNo;
    this.hasRead = hasRead;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPageNo, bookHasRead) {
    const book = new Book(bookTitle, bookAuthor, bookPageNo, bookHasRead);
    myLibrary.push(book);
}

function createBook() {
    const newBook = document.createElement('div');
    newBook.classList.add('books');
    newBook.setAttribute("data", myLibrary.length + 1);

    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPageNo.value, bookHasRead.checked);

    const newTitle = document.createElement('span');
    newTitle.textContent = `Book Title: ${bookTitle.value}`;

    const newAuthor = document.createElement('span');
    newAuthor.textContent = `Author: ${bookAuthor.value}`;

    const newPageNo = document.createElement('span');
    newPageNo.textContent = `Number of Pages: ${bookPageNo.value}`;
    
    const newHasRead = document.createElement('button');
    newHasRead.classList.add('toggleRead');
    if(bookHasRead.checked) {
        newHasRead.textContent = "I have read this book";
        newHasRead.classList.add('read');
    }
    else {
        newHasRead.textContent = "I have not read this book";
        newHasRead.classList.add('notRead');
    }
    newHasRead.addEventListener('click', () => {
        if(newHasRead.classList.contains('notRead')) {
            newHasRead.classList.remove('notRead');
            newHasRead.textContent = "I have read this book";
            newHasRead.classList.add('read');
        }
        else {
            newHasRead.classList.remove('read');
            newHasRead.textContent = "I have not read this book";
            newHasRead.classList.add('notRead');
        }
    });

    const bookRemove = document.createElement('button');
    bookRemove.classList.add('remove');
    bookRemove.textContent = "remove book";
    bookRemove.addEventListener('click', () => {
        bookRemove.parentElement.remove();
    });


    newBook.appendChild(newTitle);
    newBook.appendChild(newAuthor);
    newBook.appendChild(newPageNo);
    newBook.appendChild(newHasRead);
    newBook.appendChild(bookRemove);

    

    container.appendChild(newBook);
}

openModal.addEventListener('click', function() {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

addBook.addEventListener('click', () => {
    createBook();
});