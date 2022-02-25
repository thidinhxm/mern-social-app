import classes from './Login.module.scss'

function Login() {
  return (
    <div className={classes.login}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeft}>
          <h3 className={classes.loginLogo}>ThiSocial</h3>
          <span className={classes.loginDesc}>Connect with friends and the world around you on ThiSocial</span>
        </div>
        <div className={classes.loginRight}>
          <div className={classes.loginBox}>
            <input placeholder="Email" className={classes.loginInput} />
            <input type="password" placeholder="Password" className={classes.loginInput} />
            <button className={classes.loginButton}>Log In</button>
            <span className={classes.loginForgot}>Forgot Password?</span>
            <button className={classes.loginRegisterButton}>Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login