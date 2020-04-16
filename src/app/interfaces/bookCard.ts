import {BookData} from './book';

export interface BookCardProps {
  book: BookData;
  onClick: () => void;
}
