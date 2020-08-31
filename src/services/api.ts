// baseURL: 'https://api.themoviedb.org/3/movie/550?api_key=2bf45dbd029ec4fbc6d4df66adb594c9',
import axios from 'axios'
// https://api.themoviedb.org/3/search/movie?api_key=2bf45dbd029ec4fbc6d4df66adb594c9&language=en-US&query=jack%20reacher&page=1&include_adult=false

const api = axios.create({

  baseURL:'https://api.themoviedb.org/3/',
})
export default api;



