import classes from './Online.module.scss';

function Online({user}) {
  return (
    <li className={classes.rightbarFriend}>
      <div className={classes.rightbarProfileImgContainer}>
        <img 
          src={user.profilePicture} 
          alt="" 
          className={classes.rightbarProfileImg} 
        />
        <span className={classes.rightbarOnline}></span>
      </div>
      <span className={classes.rightbarUsername}>{user.username}</span>
    </li>
  )
}

export default Online;