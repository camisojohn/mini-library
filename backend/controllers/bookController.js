import Book from "../models/bookModel.js";

export const addBook = async (req, res) => {
    try {
        const { title, author, year } = req.body;
        const book = await Book.create({ title, author, year, createdBy: req.user.id });
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find().populate("createdBy", "name email");
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
