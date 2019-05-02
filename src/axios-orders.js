import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://castle-builder-92fa3.firebaseio.com/'
});

export default instance;
