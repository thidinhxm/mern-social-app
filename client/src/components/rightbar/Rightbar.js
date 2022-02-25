import classes from './Rightbar.module.scss';
import { Gift, Ad } from '../../assets/images/icon/index';
import { Users } from '../../dumyData';
import Online from '../online/Online';

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
          {Users.map(user => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar;
