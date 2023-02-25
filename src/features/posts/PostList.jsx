import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const renderedPosts = posts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </article>
    );
  });

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;
