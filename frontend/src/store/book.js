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
}));
