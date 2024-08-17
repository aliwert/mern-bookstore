/*------------------------------------------------------ */
import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import bookRoutes from "./routes/book.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
/*------------------------------------------------------ */
// Connect to Database
connectDB();

/*------------------------------------------------------ */
app.use("/api/books", bookRoutes);
/*------------------------------------------------------ */
//Server
app.listen(PORT, () => {
  console.log("Server start: http://localhost:" + PORT);
});
/*------------------------------------------------------ */
/*------------------------------------------------------ */
/*------------------------------------------------------ */
