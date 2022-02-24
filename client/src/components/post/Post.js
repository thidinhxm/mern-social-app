import classes from './Post.module.scss';
import {Person1} from '../../assets/images/person/index';
import { MoreVert } from '@mui/icons-material';
import { Post1 } from '../../assets/images/post/index';
import { Heart, Like } from '../../assets/images/icon/index';
function Post() {
  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <img src={Person1} alt="" className={classes.postProfileImg} />
            <span className={classes.postUsername}>Katy Tran</span>
            <span className={classes.postDate}>5 minutes ago</span>
          </div>
          <div className={classes.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>Hey! This my first post hehe :3</span>
          <img src={Post1} alt="" className={classes.postImg} />
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postBottomLeft}>
            <img src={Like} alt="" className={classes.likeIcon} />
            <img src={Heart} alt="" className={classes.likeIcon} />
            <span className={classes.postLikeCounter}> 32 people like it</span>
          </div>
          <div className={classes.postBottomRight}>
            <span className={classes.postCommentText}>10 comments</span>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Post;