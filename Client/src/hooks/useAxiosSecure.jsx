import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

//this return the base backend url(server link) like 'http://localhost:5000' or 'https://api.example.com'

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { LogOut } = useAuth()
    useEffect(() => {
        axiosSecure.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                if (error.response.status === 401 || error.response.status === 403) {
                    console.log('LogOut')
                    LogOut()
                        .then(() => {
                            navigate('/login')
                        })
                        .catch((error)=>{console.log(error)});
                    }
                }
    );
    }, [LogOut, navigate]);
    return axiosSecure;
};

export default useAxiosSecure;