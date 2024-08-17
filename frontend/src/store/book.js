import { create } from "zustand";

export const useBookStore = create((set) => ({
  books: [],
  setBooks: (books) => set({ books }),
  createBook: async (newBook) => {
    if (!newBook.name || !newBook.image || !newBook.price) {
      return { error: true, message: "Please fill in all fields" };
    }
    const res = await fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });
    const data = await res.json();
    set((state) => ({ books: [...state.books, data.data] }));
    return { error: false, message: "Book created successfully" };
  },
  fetchBooks: async () => {
    const res = await fetch("/api/books");
    const data = await res.json();
    set({ books: data.data });
  },
  deleteBook: async (pid) => {
    const res = await fetch(`/api/books/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.error) return { error: true, message: data.message };

    set((state) => ({
      books: state.books.filter((book) => book._id !== pid),
    }));
    return { success: true, message: data.message };
  },
  updateBook: async (pid, updatedBook) => {
    const res = await fetch(`/api/books/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    });
    const data = await res.json();
    if (!data.error) return { error: true, message: data.message };

    set((state) => ({
      books: state.books.map((book) => (book._id === pid ? data.data : book)),
    }));

    return { error: false, message: data.message };
  },
}));
