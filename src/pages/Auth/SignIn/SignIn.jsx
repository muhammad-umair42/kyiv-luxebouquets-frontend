import LinkText from "./../../../components/LinkText/LinkText";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { makeRequest } from "../../../api/axios";
const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      [loginInfo.username, loginInfo.password].some(
        field => field.trim() === "",
      )
    ) {
      return alert("Please fill out all fields");
    }

    const reqParams = {
      method: "post",
      url: "/users/login",
      reqData: loginInfo,
    };

    const success = await makeRequest(reqParams);

    if (success) {
      navigate("/");
    }
  };
  return (
    <div className="sign-in">
      <div className="sign-in__wrapper">
        <h2 className="--animated-text">
          Greeting! Welcome to Kyiv LuxeBouquet Shop.
        </h2>
        <div className="sign-in__login-details">
          <div className="sign-in__input-container">
            <form onSubmit={handleSubmit}>
              <label className="--overline" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                name="username"
                className="input--primary --animated-border"
                value={loginInfo.username}
                onChange={e =>
                  setLoginInfo({ ...loginInfo, username: e.target.value })
                }
              />
              <label className="--overline" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                name="password"
                className="input--primary --animated-border"
                value={loginInfo.password}
                onChange={e =>
                  setLoginInfo({ ...loginInfo, password: e.target.value })
                }
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
        </div>
      </div>
    </div>
  );
};

export default SignIn;
