import { hostname } from './hostname';
import axios from 'axios';

export const instance = axios.create({
	baseURL: "http://"+hostname+"/api/",
	headers: { "Content-type": "multipart/form-data" },
	withCredentials: true,
})