import { useEffect, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import BooksContext from "./context/books";

import BookCreate from "./components/BookCreate/BookCreate";
import BookList from "./components/BookList/BookList";

function App() {
  const { fetchBooks } = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <BookCreate />
      <h1>Reading List</h1>
      <BookList />
    </div>
  );
}

export default App;
