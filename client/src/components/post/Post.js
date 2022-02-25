import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

import classes from './Post.module.scss';
import { MoreVert } from '@mui/icons-material';
import { Heart, Like } from '../../assets/images/icon/index';
import { NoAvatar } from '../../assets/images/person/index';

function Post({post}) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    }
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <Link to={`profile/${user.username}`}>
              <img src={user.profilePicture || NoAvatar} alt="" className={classes.postProfileImg} />
            </Link>
            <span className={classes.postUsername}>{user.username}</span>
            <span className={classes.postDate}>{format(post.createdAt)}</span>
          </div>
          <div className={classes.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>{post?.desc}</span>
          <img src={post.img} alt="" className={classes.postImg} />
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postBottomLeft}>
            <img 
              src={Like} alt="" 
              className={classes.likeIcon} 
              onClick={likeHandler}
            />
            <img 
              src={Heart} alt="" 
              className={classes.likeIcon} 
              onClick={likeHandler}
            />
            <span className={classes.postLikeCounter}> {like} people like it</span>
          </div>
          <div className={classes.postBottomRight}>
            <span className={classes.postCommentText}>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Post;