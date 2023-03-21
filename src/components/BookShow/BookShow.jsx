import { useState } from "react";
import BookEdit from "../BookEdit/BookEdit";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
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
