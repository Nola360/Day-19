// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.author = author;
  this.isbn = isbn;

}

// UI Constructor

function UI() {
}

// Add to book lisy
UI.prototype.addBookToList = function (book) {
  console.log(book);

  const list = document.querySelector('#book-list');

  // Create Table Row
  const row = document.createElement('tr');
  console.log(row)

  // Insert columns

  row.innerHTML =
    `<td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>`

  list.appendChild(row);

}

// show Alert
UI.prototype.showAlert = function (message, className) {
  // Create Div
  const div = document.createElement('div');

  // Add Class
  div.className = `alert ${className}`;

  // Add Text
  div.appendChild(document.createTextNode(message));

  // Get Parent
  const container = document.querySelector('.container');

  // Get Form
  const form = document.querySelector('#book-form');

  // Insert Alert
  container.insertBefore(div, form);

  // Timeout after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
}


UI.prototype.clearFields = function () {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  // console.log('test');
  // Get form values
  const title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value
  // console.log(title, author, isbn)


  // Instanciate book content
  const book = new Book(title, author, isbn);
  // console.log(book);

  // Instanciate UI
  const ui = new UI();


  // Validate
  if (title === '' | author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {

    // Add book to list
    ui.addBookToList(book);

    // Show Success
    ui.showAlert('Book Added!', 'success');

    // Clear fields
    ui.clearFields();

  }

  // // Method is apart of prototype book list
  //   console.log(ui);

  e.preventDefault();
})