/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { makeRequest } from '../../../api/axios';
import LinkText from './../../../components/LinkText/LinkText';
import './SignUp.css';

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [registerInfo, setRegisterInfo] = useState({
    email: '',
    password: '',
    secretAnswer: '',
    username: '',
    fullName: '',
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
      ].some(field => field.trim() === '')
    ) {
      return toast.warn('Please fill out all fields');
    }
    const reqParams = {
      method: 'post',
      url: '/users/register',
      reqData: registerInfo,
      reqType: 'register',
    };
    const { resData, success } = await makeRequest(reqParams);
    if (success) {
      toast.success(`${resData} Registered Successfully`);
      navigate('/signin', { replace: true });
    }
  };
  return (
    <div className="sign-up">
      <div className="sign-up__wrapper">
        <div className="sign-up__heading">
          <h1 className="--animated-text">Sign Up</h1>
          <p className="--caption">
            Become a member and enjoy personalized gift recommendations,fast
            checkout and more.
          </p>
        </div>
        <div className="sign-up__input-container">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="input--primary --animated-border"
              name="email"
              value={registerInfo.email}
              placeholder="Email.."
              onChange={e =>
                setRegisterInfo({ ...registerInfo, email: e.target.value })
              }
            />

            <input
              type="text"
              className="input--primary --animated-border"
              name="username"
              placeholder="Username..."
              value={registerInfo.username}
              onChange={e =>
                setRegisterInfo({ ...registerInfo, username: e.target.value })
              }
            />

            <input
              type="text"
              className="input--primary --animated-border"
              name="fullName"
              placeholder="Full Name"
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
              placeholder="It will be used to recover your account"
              onChange={e =>
                setRegisterInfo({
                  ...registerInfo,
                  secretAnswer: e.target.value,
                })
              }
            />

            <input
              type="password"
              className="input--primary --animated-border"
              name="password"
              placeholder="Password"
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
        <div className="terms-policies">
          <Link to={'/privacy'} className="--overline">
            Privacy Policy
          </Link>
          <Link to={'/terms'} className="--overline">
            Terms And Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
