import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import { Users, Posts } from '../../dumyData';
import classes from './Profile.module.scss';

function Profile() {
  return (
    <>
      <Topbar />
      <div className={classes.profile}>
        <Sidebar />
        <div className={classes.profileRight}>
          <div className={classes.profileRightTop}>
            <div className={classes.profileCover}>
              <img 
                src={Posts[0].photo} alt="" 
                className={classes.profileCoverImg}
              />
              <img 
                src={Users[0].profilePicture} alt="" 
                className={classes.profileUserImg} 
              />
            </div>
            <div className={classes.profileInfo}>
              <h4 className={classes.profileInfoName}>{Users[0].username}</h4>
              <span className={classes.profileInfoDesc}>Hello my friends!</span>
            </div>
          </div>
          <div className={classes.profileRightBottom}>
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Profile