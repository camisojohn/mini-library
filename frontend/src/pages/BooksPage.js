import React, { useEffect, useState } from "react";
import API from "../api";
import "../styles/Books.css";

const BooksPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
        const res = await API.get("/books");
        setBooks(res.data);
        };
        fetchBooks();
    }, []);

    return (
        <div className="books-container">
        <h2>📖 Available Books</h2>
        <ul>
            {books.map((book) => (
            <li key={book._id}>
                <strong>{book.title}</strong> by {book.author} ({book.year || "N/A"})
            </li>
            ))}
        </ul>
        </div>
    );
};

export default BooksPage;
