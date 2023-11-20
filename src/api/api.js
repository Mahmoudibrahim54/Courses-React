import axios from "axios";

export const API = axios;
API.defaults.baseURL = process.env.REACT_PUBLIC_API_URL;
