/*------------------------------------------------------ */
import express from "express";
import { connectDB } from "./config/db.js";
import Book from "./models/book.js";
const app = express();
/*------------------------------------------------------ */
// Connect to Database
connectDB();
/*------------------------------------------------------ */
app.use(express.json());
app.post("/books", async (req, res) => {
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
});

app.listen(5000, () => {
  console.log("Server start: http://localhost:5000");
});
/*------------------------------------------------------ */
/*------------------------------------------------------ */
/*------------------------------------------------------ */
