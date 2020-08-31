// baseURL: 'https://api.themoviedb.org/3/movie/550?api_key=2bf45dbd029ec4fbc6d4df66adb594c9',
import axios from 'axios'
const api = axios.create({

  baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=2bf45dbd029ec4fbc6d4df66adb594c9&query=Jack+Reacher',
})
export default api;


