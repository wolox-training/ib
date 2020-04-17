import {BookData} from './book';

export interface BookDetailsProps {
  route: {
    params: {
      book: BookData;
    }
  };
  navigation: any;
}
