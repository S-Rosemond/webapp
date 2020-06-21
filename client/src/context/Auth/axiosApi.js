import axios from 'axios';

const chirpsApiCall = axios.create({
  baseURL: '/api/v1.0',
});

export default chirpsApiCall;
