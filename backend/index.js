/*------------------------------------------------------ */
import express from "express";
import { connectDB } from "./config/db.js";
const app = express();
/*------------------------------------------------------ */
// Connect to Database
connectDB();
/*------------------------------------------------------ */

app.post("/books", async (req, res) => {
  const book = req.body;

  if (!book.name || !book.price || !product.image) {
    return res
      .status(400)
      .json({ error: true, message: "Please provide all fields" });
  }
});

app.listen(5000, () => {
  console.log("Server start: http://localhost:5000");
});
/*------------------------------------------------------ */
/*------------------------------------------------------ */
/*------------------------------------------------------ */
