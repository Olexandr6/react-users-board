// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});
