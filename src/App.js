import { useState } from "react";
import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = async (id, newTitle, newAuthor, newPages) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
      author: newAuthor,
      pages: newPages,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          ...response.data,
        };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title, author, pages) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
      author,
      pages,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  return (
    <div>
      <header>
        <h1 className="header-title">library</h1>
      </header>
      <BookCreate onCreate={createBook} />
      <BookList
        books={books}
        onDelete={deleteBookById}
        onEdit={editBookById}
      />
    </div>
  );
}

export default App;
