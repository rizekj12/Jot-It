import axios from 'axios';

const baseUrl = process.env.NOD_ENV === 'production' ? 'https://jot-it-api.herokuapp.com/' :'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export default api;