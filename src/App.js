import { useState, useEffect } from "react";
import  axios  from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


import BookCreate from "./components/BookCreate/BookCreate";
import BookList from "./components/BookList/BookList";


function App() {
  const[books, setBooks] = useState([]);

//?brings up the current book list when the page is first loaded.
  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data)

  };
  useEffect(() => {
    fetchBooks()

  }, []);






  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, ...response.data}
      }
      return book;
    })
    setBooks(updatedBooks);

  }
  const deleteBookId = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updateBooks = books.filter((book) => {
      return book.id !== id;

      

    })
    setBooks(updateBooks);


  }
  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    })
    
    
    const updateBooks = [
    ...books,
    response.data
    
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
