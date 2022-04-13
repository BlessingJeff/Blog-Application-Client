import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://blognewblogger.herokuapp.com/api/"
})