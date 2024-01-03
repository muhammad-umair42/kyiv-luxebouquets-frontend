/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import makeRequest from '../../../api/axios';
import './ForgotPassword.css';
const ForgotPassword = () => {
  //states and variables
  const [resetPasswordInfo, setResetPasswordInfo] = useState({
    secretAnswer: '',
    email: '',
    newPassword: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  //Handle Form Submit
  const handleSubmit = async e => {
    e.preventDefault();
    if (
      [
        resetPasswordInfo.secretAnswer,
        resetPasswordInfo.email,
        resetPasswordInfo.newPassword,
      ].some(field => field.trim() === '')
    ) {
      return toast.warn('Please fill out all fields');
    }
    if (resetPasswordInfo.newPassword !== confirmPassword) {
      return toast.warn('Passwords do not match');
    }
    const reqParams = {
      method: 'post',
      url: '/users/forgotpassword',
      reqData: resetPasswordInfo,
      reqType: 'resetpassword',
    };
    const { resData, success } = await makeRequest(reqParams);
    if (success) {
      toast.success(`${resData} Your Password has been reset`);
      navigate('/signin', { replace: true });
    }
  };
  return (
    <div className="password-recover">
      <div className="password-recover__wrapper">
        <h2 className="--animated-text">Reset your password</h2>
        <p className="--caption --animated-text">
          Please provide your following details for restoring access to your
          account
        </p>
        <div className="password-recover__input-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="secretAnswer" className="--overline">
              Your Favourite Hobby:
            </label>
            <input
              type="text"
              className="input--primary --animated-border"
              name="secretAnswer"
              value={resetPasswordInfo.secretAnswer}
              onChange={e =>
                setResetPasswordInfo({
                  ...resetPasswordInfo,
                  secretAnswer: e.target.value,
                })
              }
            />

            <input
              type="email"
              className="input--primary --animated-border"
              name="email"
              placeholder="Your Email..."
              value={resetPasswordInfo.email}
              onChange={e =>
                setResetPasswordInfo({
                  ...resetPasswordInfo,
                  email: e.target.value,
                })
              }
            />

            <input
              type="password"
              className="input--primary --animated-border"
              placeholder="New Password..."
              value={resetPasswordInfo.newPassword}
              onChange={e =>
                setResetPasswordInfo({
                  ...resetPasswordInfo,
                  newPassword: e.target.value,
                })
              }
            />

            <input
              type="password"
              className="input--primary --animated-border"
              value={confirmPassword}
              placeholder="Confirm New Password"
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <button
              type="submit"
              className="password-recover__btn btn btn--primary"
            >
              Continue
            </button>
          </form>
        </div>
        <div className="terms-policies">
          <span className="--overline">Privacy Policy</span>
          <span className="--overline">Terms And Conditions</span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
