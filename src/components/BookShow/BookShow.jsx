import { useState } from "react";
import useBooksContext from "../../hooks/use-books-context";
import BookEdit from "../BookEdit/BookEdit";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookId } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBookId(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <Card>
      <Row>
        <Col md={4}>
          <Card.Img
            variant="top"
            src={`https://picsum.photos/seed/${book.id}/300/200`}
            alt="books"
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{content}</Card.Title>
            <Button variant="outline-primary" onClick={handleEditClick}>
              Edit
            </Button>{" "}
            <Button variant="outline-danger" onClick={handleDeleteClick}>
              Delete
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default BookShow;
