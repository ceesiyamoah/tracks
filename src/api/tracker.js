import axios from 'axios';

//!change baseUrl after running ngrok
export default axios.create({ baseURL: ' http://bf2d56ec5084.ngrok.io' });
