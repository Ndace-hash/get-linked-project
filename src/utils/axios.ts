import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://backend.getlinked.ai',
    headers:{
        'Content-Type':'application/json'
    }
})
export default Axios
