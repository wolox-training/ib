import api from '../config/api';

export const getBooks = () => api.get('/api/v1/books');

export const getBookDetails = (id) => api.get(`/api/v1/books/:id`);
