import {BookData} from './book';

export interface State {
  library: {
    error: string;
    books: BookData[];
  };
  currentQuery: {
    query: string;
  };
  rentals: {
    books: BookData[];
  };
  book: {
    details: BookData;
  };
}
