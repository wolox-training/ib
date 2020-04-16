export interface BookProps {
  book: BookData;
  onClick: () => void;
}

export interface BookData {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  imageUrl: string;
}
