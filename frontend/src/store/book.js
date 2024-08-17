import { useState } from "react";
import { create } from "zustand";

export const useBookStore = create((set) => ({
  books: [],
  setBooks: (books) => set({ books }),
}));
