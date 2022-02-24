import classes from './Rightbar.module.scss';
import { Gift, Ad } from '../../assets/images/icon/index';
import {Person3} from '../../assets/images/person/index'
function Rightbar() {
  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
        <div className={classes.birthdayContainer}>
          <img src={Gift} alt="" className={classes.birthdayImg} />
          <span className={classes.birthdayText}>
            <b>Vladimir Putin</b> and <b>3 other friends</b> have a birthday today 
          </span>
        </div>
        <img src={Ad} alt="" className={classes.rightbarAd} />
        <h4 className={classes.rightbarTitle}>Online Friends</h4>
        <ul className={classes.rightbarFriendList}>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img 
                src={Person3} 
                alt="" 
                className={classes.rightbarProfileImg} 
              />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarUsername}>Paul Carter</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img 
                src={Person3} 
                alt="" 
                className={classes.rightbarProfileImg} 
              />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarUsername}>Paul Carter</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img 
                src={Person3} 
                alt="" 
                className={classes.rightbarProfileImg} 
              />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarUsername}>Paul Carter</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img 
                src={Person3} 
                alt="" 
                className={classes.rightbarProfileImg} 
              />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarUsername}>Paul Carter</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar;
