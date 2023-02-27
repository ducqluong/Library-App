import { useState } from "react";
import saveLogo from "../icons/save-icon.svg";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [pages, setPages] = useState(book.pages);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleChangePages = (event) => {
    setPages(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(book.id, title, author, pages);
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="card-left">
        <div className="form-label-edit">
          <label htmlFor="">title</label>
          <input type="text" value={title} onChange={handleChangeTitle} />
        </div>
        <div className="form-label-edit">
          <label htmlFor="">author</label>
          <input
            type="text"
            value={author}
            onChange={handleChangeAuthor}
          />
        </div>
        <div className="form-label-edit">
          <label htmlFor="">pages</label>
          <input type="text" value={pages} onChange={handleChangePages} />
        </div>
      </div>
      <div className="card-right">
        <button className="save-button">
          <img className="save-icon" src={saveLogo} alt="" />
        </button>
      </div>
    </form>
  );
}

export default BookEdit;
