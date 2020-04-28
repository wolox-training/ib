import { BookData } from "./book";

export interface State {
  library: {
    books: BookData[];
  },
  currentQuery: {
    query: string;
  },
  rentals: {
    books: BookData[];
  }
}