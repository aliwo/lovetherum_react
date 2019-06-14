import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/'
});

const LocalApi = {
  getLocal: () => api.get('local'),
  postLocal: data => api.post('local', data)
};

export default LocalApi;
