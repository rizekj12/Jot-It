import axios from 'axios';

const baseUrl = process.env.NOD_ENV === 'production' ? 'http://localhost:3000' : 'https://jot-it-api.herokuapp.com/' 

const api = axios.create({
  baseURL: baseUrl
})

export default api;