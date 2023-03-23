


import { useState } from "react";
import './BookCreate.css'; 
const BookCreate = ({onCreate}) => {
    const[title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

  return (
    <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" value={title} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    </div>
  )
}

export default BookCreate;
