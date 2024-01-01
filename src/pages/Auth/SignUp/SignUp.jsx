/* eslint-disable no-unused-vars */
import "./SignUp.css";
import LinkText from "./../../../components/LinkText/LinkText";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../../../api/axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    secretAnswer: "",
    username: "",
    fullName: "",
  });

  const handleSubmit = async e => {
    e.preventDefault();
    if (
      [
        registerInfo.email,
        registerInfo.password,
        registerInfo.secretAnswer,
        registerInfo.username,
        registerInfo.fullName,
      ].some(field => field.trim() === "")
    ) {
      return alert("Please fill out all fields");
    }
    const reqParams = {
      method: "post",
      url: "/users/register",
      reqData: registerInfo,
      reqType: "register",
    };
    const { resData, success } = await makeRequest(reqParams);

    if (success) {
      navigate("/signin", { replace: true });
    }
  };
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
          <form onSubmit={handleSubmit}>
            <label className="--overline" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              className="input--primary --animated-border"
              name="email"
              value={registerInfo.email}
              onChange={e =>
                setRegisterInfo({ ...registerInfo, email: e.target.value })
              }
            />
            <label className="--overline" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              className="input--primary --animated-border"
              name="username"
              value={registerInfo.username}
              onChange={e =>
                setRegisterInfo({ ...registerInfo, username: e.target.value })
              }
            />
            <label className="--overline" htmlFor="fullName">
              Full Name:
            </label>
            <input
              type="text"
              className="input--primary --animated-border"
              name="fullName"
              value={registerInfo.fullName}
              onChange={e =>
                setRegisterInfo({ ...registerInfo, fullName: e.target.value })
              }
            />
            <label className="--overline" htmlFor="secretAnswer">
              Your Favourite Hobby?
            </label>
            <input
              type="text"
              className="input--primary --animated-border"
              name="SecretAnswer"
              value={registerInfo.secretAnswer}
              onChange={e =>
                setRegisterInfo({
                  ...registerInfo,
                  secretAnswer: e.target.value,
                })
              }
            />
            <label className="--overline" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              className="input--primary --animated-border"
              name="password"
              value={registerInfo.password}
              onChange={e =>
                setRegisterInfo({ ...registerInfo, password: e.target.value })
              }
            />
            <button
              type="submit"
              className="btn btn--primary link--dynamic-hover sign-up__btn"
            >
              <LinkText>Join us</LinkText>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
