import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';

const githubAPI = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

if (import.meta.env.VITE_APP_GITHUB_TOKEN) {
  githubAPI.defaults.headers.common['Authorization'] = `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`;
}

export const searchUsers = async (query) => {
  try {
    const response = await githubAPI.get(`/search/users?q=${query}&per_page=10`);
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

export const getUserProfile = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export default githubAPI;