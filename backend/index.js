import express from "express";
import { connectDB } from "./config/db.js";
const app = express();

connectDB(); // Sunucu başlamadan önce veritabanına bağlan

app.get("/books", (req, res) => {
  res.send("WELCOME TO BOOK STORE PROJECT");
});

app.listen(5000, () => {
  console.log("Server start: http://localhost:5000");
});
