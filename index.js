function fetchBooks() {
  
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then(renderBooks);
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h4 = document.createElement("h4");
    h4.innerHTML = book.name;
    main.appendChild(h4);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});