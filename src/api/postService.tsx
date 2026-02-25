import axios from "axios";

const baseUrl = "http://localhost:3000";

const fetchAllPosts = async () => {
  const response = await axios.get(`${baseUrl}/posts`);
  return response.data;
};

export default { fetchAllPosts };
