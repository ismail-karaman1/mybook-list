import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import BookCreate from "./components/BookCreate/BookCreate";
import BookList from "./components/BookList/BookList";

function App() {
  const[books, setBooks] = useState([]);
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, title: newTitle}
      }
      return book;
    })
    setBooks(updatedBooks);

  }
  const deleteBookId = (id) => {
    const updateBooks = books.filter((book) => {
      return book.id !== id;

    })
    setBooks(updateBooks);


  }
  const createBook = (title) => {
   const updateBooks = [
    ...books,
    {id:Date.now(), title}
   ]
   setBooks(updateBooks)
  };

  return (
  <div>
    
    <BookCreate onCreate={createBook} />
    <h1>Reading List</h1>
    <BookList onEdit={editBookById}  books={books} onDelete={deleteBookId}/>

  </div>
  )
}

export default App;
