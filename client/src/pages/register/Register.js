import classes from './Register.module.scss'

function Register() {
  return (
    <div className={classes.login}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeft}>
          <h3 className={classes.loginLogo}>ThiSocial</h3>
          <span className={classes.loginDesc}>Connect with friends and the world around you on ThiSocial</span>
        </div>
        <div className={classes.loginRight}>
          <div className={classes.loginBox}>
            <input placeholder="Username" className={classes.loginInput} />
            <input placeholder="Email" className={classes.loginInput} />
            <input type="password" placeholder="Password" className={classes.loginInput} />
            <input type="password" placeholder="Confirm Password" className={classes.loginInput} />
            <button className={classes.loginButton}>Sign Up</button>
            <button className={classes.loginRegisterButton}>Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register