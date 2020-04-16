export interface Book {
  book: BookData;
}

export interface BookData {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  image_url: string;
}
