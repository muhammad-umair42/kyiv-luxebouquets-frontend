import "./ForgotPassword.css"
const ForgotPassword = () => {
  return (
    <div className="password-recover">
      <div className="password-recover__wrapper">
        <h2 className="--animated-text">Reset your password</h2>
        <p className="--caption --animated-text">
          Please provide your favourite hobby for restoring access to your
          account
        </p>
        <div className="password-recover__input-container">
          <form>
            <label htmlFor="question" className="--overline">
              Your Favourite Hobby:
            </label>
            <input
              type="text"
              className="input--primary --animated-border"
              name="question"
            />
            <label htmlFor="password" className="--overline">
              New Password:
            </label>
            <input
              type="password"
              className="input--primary --animated-border"
            />
            <label htmlFor="confirm-password" className="--overline">
              Confirm Password:
            </label>
            <input
              type="confirm-password"
              className="input--primary --animated-border"
            />
            <button
              type="submit"
              className="password-recover__btn btn btn--primary"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
