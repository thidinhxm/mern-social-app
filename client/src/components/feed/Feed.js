import Post from '../post/Post';
import Share from '../share/Share';
import classes from './Feed.module.scss';

function Feed() {
  return (
    <div className={classes.feed}>
      <div className={classes.feedWrapper}>
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Feed;
