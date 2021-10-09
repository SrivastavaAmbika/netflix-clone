import axios from 'axios';
const object = axios.create(
    {
        baseURL:"https://api.themoviedb.org/3/"
    }
)
export default object;