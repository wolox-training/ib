import api from '../config/api';

export const getBooks = () => api.get('/books');

export const getBookDetails = (id) => api.get(`/books/:id`);
