import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");

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

    onCreate(title, author, pages);

    setTitle("");
    setAuthor("");
    setPages("");
  };

  return (
    <div>
      <form className="input-form" action="" onSubmit={handleSubmit}>
        <div className="form-label">
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChangeTitle}
            required
          />
        </div>
        <div className="form-label">
          <label htmlFor="author">author</label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={handleChangeAuthor}
            required
          />
        </div>
        <div className="form-label">
          <label htmlFor="page-number">pages</label>
          <input
            type="number"
            name="page-number"
            id="page-number"
            value={pages}
            onChange={handleChangePages}
            required
          />
        </div>

        <button className="submit-button">submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
