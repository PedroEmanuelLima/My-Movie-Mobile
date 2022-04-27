// 9449f661
import axios from 'axios';

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
  },
};

export const api = axios.create({
    baseURL: `https://api.themoviedb.org/`,
    https: config,
    params: {
        api_key: '',
    },

});
