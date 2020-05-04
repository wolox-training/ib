import {BookData} from './book';

export interface BookDetailsProps {
  route: {
    params: {
      bookId: string;
    }
  };
  navigation: any;
}
