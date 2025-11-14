import React, { useState } from "react";
import API from "../api";
import "../styles/Books.css";

const AddBookPage = () => {
    const [formData, setFormData] = useState({ title: "", author: "", year: "" });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await API.post("/books", formData);
        alert("Book added successfully!");
        setFormData({ title: "", author: "", year: "" });
        } catch (err) {
        alert(err.response?.data?.message || "Failed to add book");
        }
    };

    return (
        <div className="add-book-container">
        <h2>Add a Book</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Book Title" onChange={handleChange} value={formData.title} />
            <input type="text" name="author" placeholder="Author" onChange={handleChange} value={formData.author} />
            <input type="number" name="year" placeholder="Year" onChange={handleChange} value={formData.year} />
            <button type="submit">Add Book</button>
        </form>
        </div>
    );
};

export default AddBookPage;
