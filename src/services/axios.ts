import axios from 'axios';

export const api = axios.create({
  baseURL: 'COLOCA_A_URL_DO_BACKEND',
});
