import axios from 'axios';

const BASE_URL = 'https://your-backend-api.com'; 

export const fetchBlogPosts = async () => {
  const response = await axios.get(`${BASE_URL}/blog-posts`);
  return response.data;
};

export const fetchBlogPostById = async (id) => {
  const response = await axios.get(`${BASE_URL}/blog-posts/${id}`);
  return response.data;
};
