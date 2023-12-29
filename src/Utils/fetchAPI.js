import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
export const API_KEY = '08e991f25fmshfe95ffa71195ec2p12825ejsne853749eb2b2';

const options = {
  method: 'GET',
  params: {

    maxResults: '50'

  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
}

