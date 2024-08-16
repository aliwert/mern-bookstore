/*------------------------------------------------------ */
import express from "express";
import { connectDB } from "./config/db.js";
import Book from "./models/book.js";
import bookRoutes from "./routes/book.js";
const app = express();
app.use(express.json());
/*------------------------------------------------------ */
// Connect to Database
connectDB();

/*------------------------------------------------------ */
app.use("/books", bookRoutes);
/*------------------------------------------------------ */
//Server
app.listen(5000, () => {
  console.log("Server start: http://localhost:5000");
});
/*------------------------------------------------------ */
/*------------------------------------------------------ */
/*------------------------------------------------------ */
