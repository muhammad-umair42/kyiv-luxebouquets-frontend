import LinkText from "./../../../components/LinkText/LinkText"
import "./SignIn.css"
import GoogleIcon from "@mui/icons-material/Google"
import AppleIcon from "@mui/icons-material/Apple"
import { Link } from "react-router-dom"
const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="sign-in__wrapper">
        <h2 className="--animated-text">
          Greeting! Welcome to Kyiv LuxeBouquet Shop.
        </h2>
        <div className="sign-in__login-details">
          <div className="sign-in__input-container">
            <form action="" className="--animated-border">
              <label className="--overline" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                name="username"
                className="input--primary --animated-border"
              />
              <label className="--overline" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                name="password"
                className="input--primary --animated-border"
              />
              <button
                type="submit"
                className="btn btn--primary link--dynamic-hover sign-in__btn"
              >
                <LinkText>Continue</LinkText>
              </button>
            </form>
            <div className="sign-in__other-options">
              <Link
                to="/forgotpassword"
                className="forgot-password link--dynamic-hover --animated-border"
              >
                <LinkText>Forgot Password?</LinkText>
              </Link>
              <Link
                to="/signup"
                className="sign-up__option link--dynamic-hover --animated-border"
              >
                <LinkText>Sign Up?</LinkText>
              </Link>
            </div>
          </div>
          <div className="sign-in__other-methods">
            <p className="--caption">
              Instantly login or sign up via Google or Apple
            </p>
            <div className="sign-in__other-methods__wrapper">
              <div className="btn__google-signIn btn btn--secondary --animated-border">
                <GoogleIcon fontSize="inherit" /> Continue with google
              </div>
              <div className="btn__apple-signIn btn btn--secondary --animated-border">
                <AppleIcon fontSize="inherit" /> Continue with apple
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
