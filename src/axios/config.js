import axios from 'axios';

const SiteFetch =  axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type':'aplications/json'
    }
})

export default SiteFetch