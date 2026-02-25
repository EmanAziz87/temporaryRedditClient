import axios from "axios";

const baseUrl = "http://localhost:3000";

const fetchAllPosts = async () => {
  const response = await axios.get(`${baseUrl}/posts`);
  return response.data;
};

const fetchPost = async (communityId: string, postId: string) => {
  const response = await axios.get(
    `${baseUrl}/posts/community/${communityId}/post/${postId}`,
  );
  return response.data;
};

export default { fetchAllPosts, fetchPost };
