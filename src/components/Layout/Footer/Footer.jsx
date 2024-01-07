/* eslint-disable no-unused-vars */
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import makeRequest from '../../../api/axios';
import TextHoverEffect from '../../LinkText/LinkText';
import './Footer.css';
const Footer = () => {
  //States
  const user = useSelector(state => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [footerCategories, setFooterCategories] = useState(null);

  //Handle categories shown in footer
  useEffect(() => {
    const fetchData = async () => {
      const reqParams = {
        url: '/categories/',
        method: 'get',
        reqType: 'getcategories',
      };
      const { resData, success } = await makeRequest(reqParams);
      if (success) {
        if (resData.length > 8) {
          setFooterCategories(resData.splice(0, 8));
        } else {
          setFooterCategories(resData);
        }
      }
    };
    fetchData();
  }, []);

  //handle Special Emails user reminder
  const handleSpecialEmailsChange = async e => {
    e.preventDefault();
    if (!user) {
      toast.warn('Please Login First');
      navigate('/signin', { replace: true });
      return null;
    }
    const reqParams = {
      method: 'post',
      reqData: { specialEmails: true },
      dispatch,
      reqType: 'specialEmails',
      url: '/users/updatespecialemails',
    };

    const { resData, success } = await makeRequest(reqParams);
    if (success) {
      console.log(`In Footer Success ${resData}`);
      toast.success(`${resData} is Subscribed to Special Emails`);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__newsletter --animated-border">
        <p>
          Remember to offer beautiful flowers from Kyiv Florist Studio
          Valentines Day, Mothers Day, Christmas... Reminds you 7 days before.
          No spam or sharing your address
        </p>
        <input
          className="input--primary --animated-border footer--email-input"
          type="text"
          placeholder="Your Email"
          disabled={user?.specialEmails || false}
        />
        <button
          className="btn btn--primary link--dynamic-hover footer--email-btn"
          disabled={user?.specialEmails || false}
          onClick={handleSpecialEmailsChange}
        >
          <TextHoverEffect>REMIND</TextHoverEffect>
        </button>
      </div>

      <div className="footer__contacts --animated-border">
        <h5>Contact Us</h5>
        <div className="footer__link-container">
          <span className="footer__link-label">Address</span>
          <span className="footer__link-text">
            <TextHoverEffect>15/4 Khreshchatyk Street, Kyiv</TextHoverEffect>
          </span>
        </div>
        <div className="footer__link-container">
          <span className="footer__link-label">Phone</span>
          <span className="footer__link-text ">
            <TextHoverEffect>+380980099777</TextHoverEffect>
          </span>
        </div>
        <div className="footer__link-container">
          <span className="footer__link-label">General Enquiry:</span>
          <span className="footer__link-text ">
            <TextHoverEffect>Kiev.Florist.Studio@gmail.com</TextHoverEffect>
          </span>
        </div>
        <h5>Follow Us</h5>
        <div className="footer__link-social__container">
          <InstagramIcon
            className="footer__link-social__container-icon"
            style={{ fontSize: '30px' }}
          />
          <PinterestIcon
            style={{ fontSize: '30px' }}
            className="footer__link-social__container-icon"
          />
          <FacebookOutlinedIcon
            style={{ fontSize: '30px' }}
            className="footer__link-social__container-icon"
          />
        </div>
      </div>

      <div className="footer__shop --animated-border">
        <h5>Shop</h5>
        <Link to={'/categories'} className="footer__link-text">
          <TextHoverEffect>All Products</TextHoverEffect>
        </Link>
        {footerCategories &&
          footerCategories.map(c => (
            <div className="footer__link-text" key={c._id}>
              <TextHoverEffect>{c.name}</TextHoverEffect>
            </div>
          ))}

        <h5>Service</h5>
        <Link to={'/subscription'} className="footer__link-text ">
          <TextHoverEffect>Flower Subcription</TextHoverEffect>
        </Link>
        <div className="footer__link-text ">
          <TextHoverEffect>Weeding and Reception</TextHoverEffect>
        </div>
      </div>

      <div className="footer__about --animated-border">
        <h5>About Us</h5>
        <Link to={'/about'} className="footer__link-text ">
          <TextHoverEffect>Our Story</TextHoverEffect>
        </Link>
        <Link to={'/about'} className="footer__link-text">
          <TextHoverEffect>Blog</TextHoverEffect>
        </Link>
        <div className="footer__gap"></div>
        <div className="footer__link-text">
          <TextHoverEffect>Shipping & returns</TextHoverEffect>
        </div>
        <div className="footer__link-text">
          <TextHoverEffect>Terms & Conditions</TextHoverEffect>
        </div>
        <div className="footer__link-text">
          <TextHoverEffect>Privicy Policy</TextHoverEffect>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
