import Book from "../model/book.model.js";

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find(); // Fetch all books from the collection
        res.status(200).json(books); // Send the books data as JSON
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
