/*------------------------------------------------------ */
import express from "express";
import { connectDB } from "./config/db.js";
import Book from "./models/book.js";
const app = express();
/*------------------------------------------------------ */
// Connect to Database
connectDB();
/*------------------------------------------------------ */

app.post("/books", async (req, res) => {
  const book = req.body;

  if (!book.name || !book.price || !book.image) {
    return res
      .status(400)
      .json({ error: true, message: "Please provide all fields" });
  }
  const newBook = new Book(book);
});

app.listen(5000, () => {
  console.log("Server start: http://localhost:5000");
});
/*------------------------------------------------------ */
/*------------------------------------------------------ */
/*------------------------------------------------------ */
