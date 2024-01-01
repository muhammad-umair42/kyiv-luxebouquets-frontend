/* eslint-disable no-unused-vars */
import LinkText from "./../../../components/LinkText/LinkText";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { makeRequest } from "../../../api/axios";
import { useDispatch } from "react-redux";
const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
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
      reqType: "login",
      dispatch: dispatch,
    };

    const { resData, success } = await makeRequest(reqParams);

    if (success) {
      // navigate("/");
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
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                className="input--primary --animated-border"
                value={loginInfo.username}
                placeholder="Username..."
                onChange={e =>
                  setLoginInfo({ ...loginInfo, username: e.target.value })
                }
              />

              <input
                type="password"
                name="password"
                className="input--primary --animated-border"
                value={loginInfo.password}
                placeholder="Password..."
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
        <div className="terms-policies">
          <span className="--overline">Privacy Policy</span>
          <span className="--overline">Terms And Conditions</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
