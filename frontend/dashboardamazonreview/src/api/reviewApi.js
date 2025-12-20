import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

export const getRatingStats = () => axios.get(`${API_BASE_URL}/stats/rating`);
export const getBrandStats = () => axios.get(`${API_BASE_URL}/stats/brands`);
export const getAllReviews = () => axios.get(`${API_BASE_URL}/reviews`);
export const getRatingStatsByAsin = (asin) => axios.get(`${API_BASE_URL}/stats/rating/${asin}`);
export const getUniqueAsins = () => axios.get(`${API_BASE_URL}/reviews/unique-asins`);