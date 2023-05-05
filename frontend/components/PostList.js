import axios from 'axios';

export default function PostList({ posts, fetchPosts }) {
  async function handleDelete(id) {
    try {
      const localIPAddress = window.location.hostname;
      await axios.delete(`http://${localIPAddress}:5000/api/posts/${id}`);
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => handleDelete(post._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
