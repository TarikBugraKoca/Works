import Constants from 'expo-constants';

const { apiBaseUrl } = Constants.expoConfig.extra;

export const fetchPosts = async (page = 1, limit = 10) => {
  const response = await fetch(`${apiBaseUrl}/posts?_page=${page}&_limit=${limit}`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return await response.json();
};