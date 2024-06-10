// src/utils/fetchFromAPI.js
import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Host': ' youtube-v31.p.rapidapi.com',
    'X-RapidAPI-Key': '6808a059fdmsh0b04190ad27d1dbp16cea8jsn751c01ad0075',
  },
};

const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export default fetchFromAPI;
