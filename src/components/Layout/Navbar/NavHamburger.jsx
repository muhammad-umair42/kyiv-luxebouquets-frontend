/* eslint-disable react/prop-types */
import CloseIcon from '@mui/icons-material/Close';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCartOpen, setNavOpen } from '../../../app/Slices/interactionSlice';
import Cart from '../../Cart/Cart';

const NavHamburger = ({ user, handleLogout }) => {
  const dispatch = useDispatch();
  const navOpen = useSelector(state => state.interaction.navOpen);
  const currentUrl = window.location.pathname;
  return (
    <div className="hamburger">
      <div className="hamburger__menu-option">
        <div
          className="menu-option__icon"
          onClick={() => {
            dispatch(setNavOpen());
          }}
        >
          <MenuIcon fontSize="inherit" />
        </div>
        <div className={`nav-sidebar ${navOpen ? 'nav-sidebar--open' : ''}`}>
          <ul
            className="nav-sidebar__sidebar-links"
            onClick={() => dispatch(setNavOpen())}
          >
            <li className="sidebar-link sidebar-link--close">
              <CloseIcon fontSize="inherit" />
            </li>

            {user?.username ? (
              <div className=" user-details">
                <Link to={'/userdashboard'} className="user--details">
                  <div className="user--details-dashboard">
                    {user.profilePicture && (
                      <img src={user.profilePicture} alt="" />
                    )}
                    <span className="--subtitle">DASHBOARD</span>
                  </div>
                  <div className="user--details-logout" onClick={handleLogout}>
                    LOGOUT
                  </div>
                </Link>
              </div>
            ) : (
              <Link to="/signin" className="sidebar-link">
                Sign in
              </Link>
            )}

            <Link to={'/categories'} className="sidebar-link">
              Shop
            </Link>
            <Link to={'/subscription'} className="sidebar-link">
              Flower Subscription
            </Link>
            <a
              href={`${currentUrl === '/' ? '#contact' : '/'}`}
              className="sidebar-link"
            >
              {currentUrl === '/' ? 'Contact' : 'Home'}
            </a>
            <Link to={'/about'} className="sidebar-link">
              About us
            </Link>
            <li className="sidebar-link">
              <ul className="sidebar-link__company-links">
                <Link to={'/shipping'} className="company-links__link">
                  Shipping & returns
                </Link>
                <Link to={'/terms'} className="company-links__link">
                  Terms & conditions
                </Link>
                <Link to={'/conditions'} className="company-links__link">
                  Pricacy Policy
                </Link>
              </ul>
            </li>
            <li className="sidebar-link__social-links">
              <span className="social-link">
                <InstagramIcon fontSize="inherit" />
              </span>
              <span className="social-link">
                <PinterestIcon fontSize="inherit" />
              </span>
              <span className="social-link">
                <FacebookOutlinedIcon fontSize="inherit" />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="hamburger__cart-option">
        <div className="menu-option__icon">
          <ShoppingBagOutlinedIcon
            fontSize="inherit"
            onClick={() => dispatch(setCartOpen())}
          />
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default NavHamburger;
