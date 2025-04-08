// import { useEffect, useState } from "react";
import withFetch from "./withFetch";

function PostsList({ data: posts, loading, error, refetch, isRefetching }: any) {
  // const [posts, setPosts] = useState(data);
  // // useEffect(() => {
  // //     fetch("https://jsonplaceholder.typicode.com/posts")
  // //     .then((res) => res.json())
  // //     .then((data) => {
  // //         setPosts(data);
  // //     })
  // // }, []);
  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1>Posts List</h1>
      <button onClick={refetch}>Refetch</button>
      {isRefetching && <div>refetching...</div>}
        <div>
          {posts.map((post: any) => {
            return <div key={post.id}>{post.title}</div>;
          })}
        </div>
    </div>
  );
}

export default withFetch(
  PostsList,
  "https://jsonplaceholder.typicode.com/posts"
);
