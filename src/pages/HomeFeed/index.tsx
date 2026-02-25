import { useQuery } from "@tanstack/react-query";
import postService from "../../api/postService";

const HomeFeed = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allPosts"],
    queryFn: () => postService.fetchAllPosts(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data) console.log("fetched data: ", data);

  return (
    <div>
      Posts
      <ul>
        {data.allFetchedPosts.map((post: any) => {
          return (
            <div>
              <div>{post.title}</div>
              <img src={post.mediaUrl} alt="" width={300} height={300} />
              <div>{post.content}</div>
              <div>{post.likes}</div>
              <br />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeFeed;
