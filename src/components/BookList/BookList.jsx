import BookShow from "../BookShow/BookShow";
import useBooksContext from "../../hooks/use-books-context";

const BookList = () => {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div>{renderedBooks}</div>;
};

export default BookList;
