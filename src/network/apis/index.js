import axios from "axios";
import {baseUrl} from './../../utils/Constants';
import { requestHandler, successHandler, errorHandler } from "../interceptors";

export const axiosInstance = axios.create({
  baseURL:baseUrl,
});

// Handle request 
axiosInstance.interceptors.request.use(
  request => requestHandler(request)
);
// Handle response 
axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);