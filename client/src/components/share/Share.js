import classes from './Share.module.scss'
import { Person1 } from '../../assets/images/person/index'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'

function Share() {
  return (
    <div className={classes.share}>
      <div className={classes.shareWrapper}>
        <div className={classes.shareTop}>
          <img src={Person1} alt="" className={classes.shareProfilePicture} />
          <input 
            type="text" 
            className={classes.shareInput} 
            placeholder='What are you thinking?'
          />
        </div>
        <hr className={classes.shareHr} />
        <div className={classes.shareBottom}>
          <div className={classes.shareOptions}>
            <div className={classes.shareOption}>
              <PermMedia htmlColor='tomato' className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Photo or Video</span>
            </div>
            <div className={classes.shareOption}>
              <Label htmlColor='blue' className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Tag</span>
            </div>
            <div className={classes.shareOption}>
              <Room htmlColor='green' className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Location</span>
            </div>
            <div className={classes.shareOption}>
              <EmojiEmotions htmlColor='goldenrod' className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button className={classes.shareButton}>Share</button>
        </div>
      </div>
    </div>
  )
};

export default Share;