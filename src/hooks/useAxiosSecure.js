import axios from "axios";

const axiosSecure = axios.create({

  baseURL:
    "https://project-pet-adoption-server.onrender.com",

  withCredentials: true,
});

export default axiosSecure;