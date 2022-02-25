import Post from '../post/Post';
import Share from '../share/Share';
import classes from './Feed.module.scss';
import { Posts } from '../../dumyData';
function Feed() {
  return (
    <div className={classes.feed}>
      <div className={classes.feedWrapper}>
        <Share />
        {Posts.map(post => (
          <Post key={post.id} post={post}/>
        ))}
        
      </div>
    </div>
  )
}

export default Feed;
