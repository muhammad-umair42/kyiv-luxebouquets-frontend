/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import makeRequest from '../../../api/axios';
import Avatar from '../../../assets/avatar.png';
import Layout from '../../../components/Layout/Layout';
import LinkText from '../../../components/LinkText/LinkText';
import './UserDashBoard.css';

const UserDashBoard = () => {
  const [orders, setOrders] = useState(null);
  const user = useSelector(state => state.user.user);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const [newUserDetails, setNewUserDetails] = useState({
    username: user.username,
    email: user.email,
    fullName: user.fullName,
    contact: user.contact || 920000000000,
    secretAnswer: user.secretAnswer,
    address: user.address || '',
  });

  const handleClickProfile = () => {
    fileInputRef.current.click();
  };
  useEffect(() => {
    // Log the state after it's updated
    window.scrollTo(0, 0);
    const reqParams = {
      method: 'get',
      url: '/orders/getorders',
      dispatch,
      reqType: 'getuserorders',
    };

    const FetchData = async () => {
      const { resData, success } = await makeRequest(reqParams);
      if (success) {
        setOrders(resData);
      }
    };
    FetchData();
  }, []);

  const handleProfileChange = event => {
    const file = event.target.files[0];
    // Save the selected image to state
    const formData = new FormData();
    formData.append('profilePicture', file);
    setSelectedImage(formData); //
  };

  const handleProfileUpdate = async e => {
    e.preventDefault();

    if (!selectedImage) {
      toast.error('Please select Image');
      return;
    }

    const reqParams = {
      method: 'post',
      url: 'users/user/updateprofilepicture',
      dispatch,
      reqData: selectedImage,
      reqType: 'updateprofilepicture',
    };

    const { resData, success } = await makeRequest(reqParams);
    if (success) {
      toast.success(`${resData}`);
      setSelectedImage(null);
      return;
    }
  };

  const handleUserDetailsSubmit = async e => {
    e.preventDefault();
    const reqParams = {
      method: 'post',
      url: '/users/updateuser',
      dispatch,
      reqType: 'updateuserdetails',
      reqData: newUserDetails,
    };

    const { resData, success } = await makeRequest(reqParams);
    if (success) {
      toast.success(`${resData}`);
    }
  };

  const handleSpecialEmailsChange = async (e, val) => {
    e.preventDefault();
    console.log(val);
    const reqParams = {
      method: 'post',
      reqData: { specialEmails: val },
      dispatch,
      reqType: 'specialEmails',
      url: '/users/updatespecialemails',
    };

    const { resData, success } = await makeRequest(reqParams);
    if (success) {
      toast.success(`${resData} Special Emails Status Changed`);
    }
  };

  return (
    <Layout>
      <section className="dashboard ">
        <section className="user__img --animated-border">
          <h4>Profile Picture</h4>
          <div className="user__img-imgContainer">
            <div className="user__img-image">
              <img
                src={user.profilePicture || Avatar}
                alt=""
                className="--animated-imgZoom"
              />
            </div>
            <div className="user__img-imgContainer-btns">
              <div
                className={`btn btn--secondary link--dynamic-hover `}
                onClick={handleClickProfile}
              >
                <LinkText>Upload File</LinkText>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleProfileChange}
                />
              </div>
              <div
                className={`btn btn--primary link--dynamic-hover ${
                  selectedImage !== null ? '' : '--disabled'
                }`}
                onClick={handleProfileUpdate}
              >
                <LinkText>
                  {selectedImage ? 'Update Now' : 'First Upload'}
                </LinkText>
              </div>
            </div>
          </div>
        </section>
        <section className="user__edit --animated-border">
          <h3 className="--animated-text">{user.fullName}&apos;s Dashboard</h3>
          <div className="user__edit-wrapper">
            <div className="user__edit-details">
              <h3>Details:</h3>
              <form action="" onSubmit={handleUserDetailsSubmit}>
                <label htmlFor="username" className="--subtitle">
                  Username:
                </label>
                <input
                  className="input--primary --animated-border"
                  type="text"
                  value={newUserDetails.username}
                  name="username"
                  onChange={e =>
                    setNewUserDetails({
                      ...newUserDetails,
                      username: e.target.value,
                    })
                  }
                />
                <label htmlFor="fullName" className="--overline">
                  Full Name:
                </label>
                <input
                  className="input--primary --animated-border"
                  type="text"
                  value={newUserDetails.fullName}
                  name="fullName"
                  onChange={e =>
                    setNewUserDetails({
                      ...newUserDetails,
                      fullName: e.target.value,
                    })
                  }
                />
                <label htmlFor="email" className="--overline">
                  Email:
                </label>
                <input
                  className="input--primary --animated-border"
                  type="email"
                  value={newUserDetails.email}
                  name="email"
                  onChange={e =>
                    setNewUserDetails({
                      ...newUserDetails,
                      email: e.target.value,
                    })
                  }
                />
                <label htmlFor="secretAnswer" className="--overline">
                  (Recovery Key:) Your Favourite Hobby?:
                </label>
                <input
                  className="input--primary --animated-border"
                  type="text"
                  value={newUserDetails.secretAnswer}
                  name="secretAnswer"
                  onChange={e =>
                    setNewUserDetails({
                      ...newUserDetails,
                      secretAnswer: e.target.value,
                    })
                  }
                />
                <label htmlFor="contact" className="--overline">
                  Contact#:
                </label>
                <input
                  className="input--primary --animated-border"
                  type="tel"
                  value={newUserDetails.contact}
                  name="contact"
                  onChange={e =>
                    setNewUserDetails({
                      ...newUserDetails,
                      contact: e.target.value,
                    })
                  }
                />
                <label htmlFor="address" className="--overline">
                  Address:
                </label>
                <input
                  className="input--primary --animated-border"
                  type="text"
                  value={newUserDetails.address}
                  name="address"
                  onChange={e =>
                    setNewUserDetails({
                      ...newUserDetails,
                      address: e.target.value,
                    })
                  }
                />
                <button
                  className="btn btn--primary link--dynamic-hover"
                  type="submit"
                >
                  <LinkText>update details</LinkText>
                </button>
              </form>
            </div>
          </div>

          <div className="special-emails --animated-border">
            {user.specialEmails && (
              <div className="special-emails__on ">
                <h5>Special Reminders!</h5>
                <p>
                  We will remind you to offer beautiful flowers from Kyiv
                  Florist Studio. Valentines Day, Mothers Day, Christmas...
                  Reminds you 7 days before. No spam or sharing your address
                </p>
                <div
                  className="btn btn--primary link--dynamic-hover"
                  onClick={e => handleSpecialEmailsChange(e, false)}
                >
                  <LinkText>un subscribe</LinkText>
                </div>
              </div>
            )}
            {!user.specialEmails && (
              <div className="special-emails__off">
                <h5>Special Reminder!</h5>
                <p>
                  Remember to offer beautiful flowers from Kyiv Florist Studio.
                  Valentines Day, Mothers Day, Christmas... Reminds you 7 days
                  before. No spam or sharing your address
                </p>
                <div
                  className="btn btn--primary link--dynamic-hover"
                  onClick={e => handleSpecialEmailsChange(e, true)}
                >
                  <LinkText>Subscribe Now</LinkText>
                </div>
              </div>
            )}
          </div>
          <div className="monthly-subscription --animated-border">
            {user?.subscribed?.isSubscribed && (
              <div className="ms__on">
                <h5>You are Subscribed to our user.subscribed.planName Plan</h5>
                <span>
                  You are having user.subscribed.deliveries deliveries
                </span>
                <span>
                  You have acess to user.subscribed.planName discount on every
                  item.
                </span>
                <div
                  className="btn btn--secondary link--dynamic-hover"
                  onClick={e => handleSpecialEmailsChange(e, false)}
                >
                  Un Subscribe
                </div>
              </div>
            )}
            {!user?.subscribed?.isSubscribed && (
              <div className="ms__off">
                <h5>Wanna Hear About Our Subscriptions?</h5>
                <span>
                  Basic,Seasonal or Premium deliveries on regular basics
                </span>
                <span> special discounts on every item.</span>
                <Link
                  to={'/subscription'}
                  className="btn btn--secondary link--dynamic-hover"
                >
                  Read More
                </Link>
              </div>
            )}
          </div>
        </section>
        <section className="orders --animated-border">
          <h4>Order&lsquo;s History</h4>
          {orders?.map((order, i) => (
            <div className="order --animated-border" key={order?._id}>
              <span>Order#:{i + 1}</span>
              {order?.products?.map(product => (
                <div className="product" key={product?._id}>
                  <span className="--overline">Name: {product?.id.name}</span>
                  <span>quantity: {product?.quantity}</span>
                </div>
              ))}
              <span className="--overline">Total: {order?.total}</span>
              <span className="--overline">Status: {order?.status}</span>
            </div>
          ))}
        </section>
      </section>
    </Layout>
  );
};

export default UserDashBoard;
