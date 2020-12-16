import axios from 'axios';

//!change baseUrl after running ngrok
export default axios.create({ baseURL: 'https://41a1769231e4.ngrok.io' });
