import "./SignUp.css"
import LinkText from "./../../../components/LinkText/LinkText"
const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="sign-up__wrapper">
        <div className="sign-up__heading">
          <h2 className="--animated-text">Sign Up</h2>
          <p className="--caption">
            Become a member and enjoy personalized gift recommendations,fast
            checkout and more.
          </p>
        </div>
        <div className="sign-up__input-container">
          <form action="">
            <label className="--overline" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              className="input--primary --animated-border"
              name="email"
            />
            <label className="--overline" htmlFor="secretQuestion">
              Your Favourite Hobby?
            </label>
            <input
              type="text"
              className="input--primary --animated-border"
              name="SecretQuestion"
            />
            <label className="--overline" htmlFor="password">
              Password:
            </label>
            <input
              type="email"
              className="input--primary --animated-border"
              name="password"
            />
            <button className="btn btn--primary link--dynamic-hover sign-up__btn">
              <LinkText>Join us</LinkText>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
