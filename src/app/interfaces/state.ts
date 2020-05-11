import {BookData} from './book';
import {UserResponse} from './user';

export interface State {
  library: {
    error: string;
    loading: boolean;
    books: BookData[];
  };
  currentQuery: {
    error: string;
    loading: boolean;
    query: string;
  };
  rentals: {
    books: BookData[];
  };
  book: {
    details: BookData;
  };
  currentUser: {
    error: string;
    loading: boolean;
    user: UserResponse;
  };
}
