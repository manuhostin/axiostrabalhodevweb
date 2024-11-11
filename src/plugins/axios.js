import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ab7537861194946a843a632ab0fdd5c3`,
  },
});

export default api;