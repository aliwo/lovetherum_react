import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/'
});

const LoveApi = {
    postLove: data => api.post('love', data),
    getLoveDetail: id => api.get(`love/${id}`),
    getContract: () => api.get('love/contract')
};

export default LoveApi;
