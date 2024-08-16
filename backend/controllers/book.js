import Book from "../models/book.js";
/*------------------------------------------------------ */

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ error: false, data: books });
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

/*------------------------------------------------------ */

export const createBook = async (req, res) => {
  const book = req.body;

  if (!book.name || !book.price || !book.image) {
    return res
      .status(400)
      .json({ error: true, message: "Please provide all fields" });
  }
  const newBook = new Book(book);

  try {
    await newBook.save();
    res.status(201).json({ error: false, data: newBook });
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

/*------------------------------------------------------ */

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    await Book.findByIdAndDelete(id);
    res.status(200).json({ error: false, message: "Book deleted" });
  } catch (error) {
    res.status(404).json({ error: true, message: "Book not found" });
  }
};

/*------------------------------------------------------ */

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const book = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: true, message: "Invalid id" });
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, book, { new: true });
    res.status(200).json({ error: false, data: updatedBook });
  } catch (error) {
    res.status(404).json({ error: true, message: "Book not found" });
  }
};
