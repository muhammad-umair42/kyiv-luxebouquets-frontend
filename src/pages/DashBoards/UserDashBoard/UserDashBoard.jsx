import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import makeRequest from '../../../api/axios';
import Avatar from '../../../assets/avatar.png';
import Layout from '../../../components/Layout/Layout';
import LinkText from '../../../components/LinkText/LinkText';
import './UserDashBoard.css';

const UserDashBoard = () => {
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
    console.log('Selected Image State:', selectedImage);
  }, [selectedImage]);

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

  return (
    <Layout>
      <section className="dashboard">
        <section className="user__details">
          <div className="user__details-wrapper">
            <div className="user__details-img">
              <img src={user.profilePicture || Avatar} alt="" />
            </div>
            <div className="user__details-info">
              <span className="--overline">Full Name : </span>
              <span> {user.fullName}</span>
              <span className="--overline">Username : </span>
              <span> {user.username}</span>
              <span className="--overline">Email : </span>
              <span> {user.email}</span>
            </div>
          </div>
        </section>
        <section className="user__edit">
          <h3>{user.fullName}&apos;s Dashboard</h3>
          <div className="user__edit-wrapper">
            <div className="user__edit-imgContainer">
              <div className="user__edit-image">
                <img src={user.profilePicture || Avatar} alt="" />
              </div>
              <div className="user__edit-imgContainer-btns">
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
            <div className="user__edit-details">
              <h3>Details:</h3>
              <form action="">
                <label htmlFor="username">Username:</label>
                <input
                  className="input--primary"
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
                <label htmlFor="fullName">Full Name:</label>
                <input
                  className="input--primary"
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
                <label htmlFor="email">Email:</label>
                <input
                  className="input--primary"
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
                <label htmlFor="secretAnswer">
                  (Recovery Key:) Your Favourite Hobby?:
                </label>
                <input
                  className="input--primary"
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
                <label htmlFor="contact">Contact#:</label>
                <input
                  className="input--primary"
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
                <label htmlFor="address">Address:</label>
                <input
                  className="input--primary"
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
        </section>
        <section className="orders"></section>
      </section>
    </Layout>
  );
};

export default UserDashBoard;
