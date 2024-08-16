import express from "express";
import mongoose from "mongoose";
import Book from "../models/book.js";
import {
  createBook,
  deleteBook,
  getBooks,
  updateBook,
} from "../controllers/book.js";

const router = express.Router();

/*------------------------------------------------------ */

//! URL: /books
//Get
router.get("/", getBooks);

/*------------------------------------------------------ */
//Post
router.post("/", createBook);
/*------------------------------------------------------ */

/*------------------------------------------------------ */
//Delete
router.delete("/:id", deleteBook);
/*------------------------------------------------------ */

/*------------------------------------------------------ */
//Update
router.put("/:id", updateBook);

export default router;
