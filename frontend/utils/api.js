import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const createProduct = async (name, price) => {
  const response = await axios.post(`${API_URL}/products`, { name, price });
  return response.data;
};

export const fetchNavigations = async () => {
    const response = await axios.get(`${API_URL}/navigations`);
    return response.data;
  };