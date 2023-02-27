import { useState } from "react";
import BookEdit from "./BookEdit";
import deleteLogo from "../icons/delete-icon.svg";
import editLogo from "../icons/edit-icon.svg";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle, newAuthor, newPages) => {
    setShowEdit(false);
    onEdit(id, newTitle, newAuthor, newPages);
  };

  let content = <div></div>;

  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div>
      <div className="card">
        <div className="card-left">
          <img
            src={`https://picsum.photos/seed/${book.id}/180/120`}
            alt="book"
          />
          <div>
            <h2 className="card-title">{book.title}</h2>
            <p className="card-author">{book.author}</p>
            <p className="card-pages">Pages: {book.pages}</p>
          </div>
        </div>
        <div className="card-right">
          <button className="edit-button" onClick={handleEdit}>
            <img className="edit-icon" src={editLogo} alt="" />
          </button>
          <button className="delete-button" onClick={handleDelete}>
            <img className="delete-icon" src={deleteLogo} alt="" />
          </button>
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default BookShow;
