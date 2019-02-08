import axios from 'axios'

export const http = axios.create({
  // baseURL: 'https://swapi.co/api/'
  baseURL: 'https://swapi.co/api/films/'
})
