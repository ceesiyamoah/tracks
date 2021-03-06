import axios from 'axios';
import { AsyncStorage } from 'react-native';

//!change baseUrl after running ngrok
const instance = axios.create({ baseURL: 'http://d6db9f4cf0e4.ngrok.io' });

instance.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(err) => Promise.reject(err)
);

export default instance;
