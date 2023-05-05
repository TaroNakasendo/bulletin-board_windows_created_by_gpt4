import { useState } from 'react';
import axios from 'axios';

export default function PostForm({ fetchPosts }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const localIPAddress = window.location.hostname;
      await axios.post(`http://${localIPAddress}:5000/api/posts`, { title, content });
      setTitle('');
      setContent('');
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
