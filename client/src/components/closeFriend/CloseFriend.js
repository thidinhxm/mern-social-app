import classes from './CloseFriend.module.scss';

function CloseFriend({friend}) {
  return (
    <li className={classes.sidebarFriend}>
      <img src={friend.profilePicture} alt="" className={classes.sidebarFriendImg} />
      <span className={classes.sidebarFriendName}>{friend.username}</span>
    </li>
  )
}

export default CloseFriend