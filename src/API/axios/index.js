import axios from "axios";

export const API_URL = "http://localhost:5000/api";

const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
	const token = localStorage.getItem("auth-token");
	if (token) config.headers.Authorization = `Bearer ${token}`;
	if (config.headers["Content-Type"] !== "multipart/form-data") {
		config.headers["Content-Type"] = "application/json";
	}
	return config;
});

$api.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		if (error.response.status === 401) {
			localStorage.removeItem("auth-token");
		}
		return Promise.reject(error);
	}
);

export default $api;