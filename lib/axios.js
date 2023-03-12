import axios from 'axios';
export default axios.create({
    baseURL: process.env.BACKEND_API_URL,
    headers:{
        "Content-Type": "application/json"
    }
    // headers:{
    //     "X-Requested-with": "XMLHttpRequest",
    //     "withCredentials": true,
    // }
})