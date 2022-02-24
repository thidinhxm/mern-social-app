import React from 'react';
import classes from './Topbar.module.scss';
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
import { Person1 } from '../../assets/images/person/index';

function Topbar() {
  return (
    <div className={classes.topbarContainer}>
      <div className={classes.topbarLeft}>
        <span className={classes.logo}>ThiSocial</span>
      </div>
      <div className={classes.topbarCenter}>
        <div className={classes.searchbar}>
          <Search className={classes.searchIcon} />
          <input 
            type="text" 
            placeholder='Search for friend, post or video' 
            className={classes.searchInput} 
          />
        </div>
      </div>
      <div className={classes.topbarRight}>
        <div className={classes.topbarLinks}>
          <span className={classes.topbarLink}>Homepage</span>
          <span className={classes.topbarLink}>Timeline</span>
        </div>
        <div className={classes.topbarIcons}>
          <div className={classes.topbarIconItem}>
            <Person />
            <span className={classes.topbarIconBadge}>2</span>
          </div>
          <div className={classes.topbarIconItem}>
            <Chat />
            <span className={classes.topbarIconBadge}>2</span>
          </div>
          <div className={classes.topbarIconItem}>
            <Notifications />
            <span className={classes.topbarIconBadge}>2</span>
          </div>
        </div>
        <img src={Person1} alt="" className={classes.topbarImg}/>
      </div>
    </div>
  )
}

export default Topbar;