import axios from "axios";
import { apiUrl, authToken } from "../constant";

const axiosConfig = axios.create( {
    baseURL: apiUrl,
} );

axiosConfig.interceptors.response.use(
    response => response,
    error => {
        if ( error.response.status === 401 ) {
            localStorage.removeItem( authToken )
            alert( 'Token Expired! Please Login.' );
            window.location.href = '/login';
        }

        return Promise.reject( error );
    }
);

export default axiosConfig