import axios from "axios";
const axiosSecure = axios.create({
  baseURL: "https://safebangladesh-server.vercel.app",
  withCredentials: true
});

export default axiosSecure;