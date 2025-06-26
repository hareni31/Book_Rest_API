_ _ Book REST API_ _
A simple REST API to manage books using Node.js and Express.js.
Data is stored in memory (no database).

*** Features***
Get all books

Get book by ID

Add, Update, Delete book

*** How to Run***

bash:

npm install
node index.js
API runs at: http://localhost:3000

*** API Endpoints***

Method	Route	        Description

GET	/books=>List all books,
GET	/books/:id=>	Get book by ID,
POST	/books	=>        Add a book,
PUT	/books/:id=>	Update a book.
DELETE	/books/:id=>	Delete a book.

***Test in Postman***

 *** Set Body-raw-json:

json

{
  "title": "The Alchemist",
  "author": "Paulo Coelho"
}
