import axios from 'axios';
import { Data } from '../types/data';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const API_ACCESS_KEY = '2FOj_CspBF8F4PatbkEDfxUF3hd7c9OQwaHRnx1k574';

const getImages = async (
  searchedQuery: string,
  currentPage: number = 1,
  perPage: number = 12
): Promise<Data> => {
  const axiosOptions = {
    headers: {
      Authorization: `Client-ID ${API_ACCESS_KEY}`,
    },
    params: {
      query: searchedQuery,
      page: currentPage,
      per_page: perPage,
    },
  };
  const response = await axios.get<Data>('search/photos', axiosOptions);
  return response.data;
};

export default getImages;
