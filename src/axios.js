import axios from 'axios';

const instance = axios.create({
    baseURL : 'http://localhost:5001/challange1-db8ce/us-central1/api' //API(cloud function) URL
});

export default instance;