import axios from 'axios';

const urlAPI = 'https://api.themoviedb.org/3/';

const api = axios.create({
  baseURL: urlAPI,
});

export default api;
