import axios from 'axios'

const baseUrl =
process.env.NODE_ENV === 'production'
? 'https://destination-hot-dog.fly.dev/'
: 'http://localhost:3000';

const api = axios.create({
    baseURL: baseUrl
})

export default api;