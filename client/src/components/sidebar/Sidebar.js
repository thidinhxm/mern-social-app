import classes from './Sidebar.module.scss';
import { RssFeed, Chat, PlayCircleFilledOutlined, Bookmark, Group, HelpOutline, WorkOutline, Event, School } from '@mui/icons-material';
import {Person2, Person3, Person4, Person5, Person6, Person7} from '../../assets/images/person/index.js';
function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarWrapper}>
        <ul className={classes.sidebarList}>
          <li className={classes.sidebarListItem}>
            <RssFeed className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Feed</span>
          </li>
          <li className={classes.sidebarListItem}>
            <Chat className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Chats</span>
          </li>
          <li className={classes.sidebarListItem}>
            <PlayCircleFilledOutlined className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Videos</span>
          </li>
          <li className={classes.sidebarListItem}>
            <Group className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Groups</span>
          </li>
          <li className={classes.sidebarListItem}>
            <Bookmark className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Bookmarks</span>
          </li>
          <li className={classes.sidebarListItem}>
            <HelpOutline className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Questions</span>
          </li>
          <li className={classes.sidebarListItem}>
            <WorkOutline className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Jobs</span>
          </li>
          <li className={classes.sidebarListItem}>
            <Event className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Event</span>
          </li>
          <li className={classes.sidebarListItem}>
            <School className={classes.sidebarIcon} />
            <span className={classes.sidebarListItemText}>Courses</span>
          </li>
        </ul>
        <button className={classes.sidebarButton}>Show More</button>
        <hr className={classes.sidebarHr} />

        <ul className={classes.sidebarFriendList}>
          <li className={classes.sidebarFriend}>
            <img src={Person2} alt="" className={classes.sidebarFriendImg} />
            <span className={classes.sidebarFriendName}>Jeremy Nguyen</span>
          </li>
          <li className={classes.sidebarFriend}>
            <img src={Person3} alt="" className={classes.sidebarFriendImg} />
            <span className={classes.sidebarFriendName}>Jeremy Nguyen</span>
          </li>
          <li className={classes.sidebarFriend}>
            <img src={Person4} alt="" className={classes.sidebarFriendImg} />
            <span className={classes.sidebarFriendName}>Jeremy Nguyen</span>
          </li>
          <li className={classes.sidebarFriend}>
            <img src={Person5} alt="" className={classes.sidebarFriendImg} />
            <span className={classes.sidebarFriendName}>Jeremy Nguyen</span>
          </li>
          <li className={classes.sidebarFriend}>
            <img src={Person6} alt="" className={classes.sidebarFriendImg} />
            <span className={classes.sidebarFriendName}>Jeremy Nguyen</span>
          </li>
          <li className={classes.sidebarFriend}>
            <img src={Person7} alt="" className={classes.sidebarFriendImg} />
            <span className={classes.sidebarFriendName}>Jeremy Nguyen</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
