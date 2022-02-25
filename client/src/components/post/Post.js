import classes from './Post.module.scss';
import { MoreVert } from '@mui/icons-material';
import { Heart, Like } from '../../assets/images/icon/index';
import { Users } from '../../dumyData';
function Post({post}) {
  const user = Users.find(user => user.id === post.userId);
  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <img src={user.profilePicture} alt="" className={classes.postProfileImg} />
            <span className={classes.postUsername}>{user.username}</span>
            <span className={classes.postDate}>{post.date}</span>
          </div>
          <div className={classes.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>{post?.desc}</span>
          <img src={post.photo} alt="" className={classes.postImg} />
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postBottomLeft}>
            <img src={Like} alt="" className={classes.likeIcon} />
            <img src={Heart} alt="" className={classes.likeIcon} />
            <span className={classes.postLikeCounter}> {post.like} people like it</span>
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