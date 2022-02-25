import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../post/Post';
import Share from '../share/Share';
import classes from './Feed.module.scss';
function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username  
        ? await axios.get('posts/profile/' + username)
        : await axios.get('posts/timeline/userId');
      setPosts(res.data);
    }
    fetchPosts();
  }, [username]);
  

  return (
    <div className={classes.feed}>
      <input type="text" onChange={e => setText(e.target.value)}/>
      <div className={classes.feedWrapper}>
        <Share />
        {posts.map(post => (
          <Post key={post._id} post={post}/>
        ))}
        
      </div>
    </div>
  )
}

export default Feed;
