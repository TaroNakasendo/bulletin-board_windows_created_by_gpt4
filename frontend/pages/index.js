import { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const localIPAddress = window.location.hostname;
      const res = await axios.get(`http://${localIPAddress}:5000/api/posts`);
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Bulletin Board</h1>
      <PostForm fetchPosts={fetchPosts} />
      <PostList posts={posts} fetchPosts={fetchPosts} />
    </div>
  );
}
