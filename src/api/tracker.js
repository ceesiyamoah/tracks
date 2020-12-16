import axios from 'axios';

//!change baseUrl after running ngrok
export default axios.create({ baseURL: ' http://103b293a8e67.ngrok.io' });
