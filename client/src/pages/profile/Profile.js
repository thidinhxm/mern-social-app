import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import { NoCover, NoAvatar } from '../../assets/images/person/index';
import classes from './Profile.module.scss';

function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    }
    fetchUser();
  }, [username])
  return (
    <>
      <Topbar />
      <div className={classes.profile}>
        <Sidebar />
        <div className={classes.profileRight}>
          <div className={classes.profileRightTop}>
            <div className={classes.profileCover}>
              <img 
                src={user.coverPicture || NoCover } alt="" 
                className={classes.profileCoverImg}
              />
              <img 
                src={user.profilePicture || NoAvatar} alt="" 
                className={classes.profileUserImg} 
              />
            </div>
            <div className={classes.profileInfo}>
              <h4 className={classes.profileInfoName}>{user.username}</h4>
              <span className={classes.profileInfoDesc}>{user.desc}</span>
            </div>
          </div>
          <div className={classes.profileRightBottom}>
            <Feed username={username}/>
            <Rightbar user={user}/>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Profile