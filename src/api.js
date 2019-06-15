import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/local'
});

const LocalApi = {
  getLocal: () => api.get(''),
  postLocal: data => api.post('', data),
  getLock: id => api.get(`lock/${id}`)
};

export default LocalApi;
