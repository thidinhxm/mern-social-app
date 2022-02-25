import classes from './Rightbar.module.scss';
import { Gift, Ad } from '../../assets/images/icon/index';
import { Users } from '../../dumyData';
import Online from '../online/Online';

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className={classes.birthdayContainer}>
          <img src={Gift} alt="" className={classes.birthdayImg} />
          <span className={classes.birthdayText}>
            <b>Vladimir Putin</b> and <b>3 other friends</b> have a birthday today 
          </span>
        </div>
        <img src={Ad} alt="" className={classes.rightbarAd} />
        <h4 className={classes.rightbarTitle}>Online Friends</h4>
        <ul className={classes.rightbarFriendList}>
          {Users.map(user => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className={classes.rightbarTitle}>Info</h4>
        <div className={classes.rightbarInfo}>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>City:</span>
            <span className={classes.rightbarInfoValue}>Paris</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>From:</span>
            <span className={classes.rightbarInfoValue}>Lodon</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>Relationship</span>
            <span className={classes.rightbarInfoValue}>Single</span>
          </div>
        </div>
        <h4 className={classes.rightbarTitle}>User Friends</h4>
        <div className={classes.rightbarFollowings}>
          {Users.map(user => (
            <div className={classes.rightbarFollowing}>
              <img src={user.profilePicture} alt="" className={classes.rightbarFollowingImg} />
              <span className={classes.rightbarFollowingName}>{user.username}</span>
            </div>
          ))}
        </div>
      </>
    )
  }

  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
        <ProfileRightbar />
      </div>
    </div>
  )
}

export default Rightbar;
