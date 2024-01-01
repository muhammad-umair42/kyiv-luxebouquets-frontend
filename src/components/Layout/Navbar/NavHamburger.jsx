/* eslint-disable react/prop-types */
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { useDispatch, useSelector } from "react-redux";
import { setCartOpen, setNavOpen } from "../../../app/Slices/interactionSlice";
import Cart from "../../Cart/Cart";
import { Link } from "react-router-dom";

const NavHamburger = ({ user }) => {
  const dispatch = useDispatch();
  const navOpen = useSelector(state => state.interaction.navOpen);

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
        <div className={`nav-sidebar ${navOpen ? "nav-sidebar--open" : ""}`}>
          <ul
            className="nav-sidebar__sidebar-links"
            onClick={() => dispatch(setNavOpen())}
          >
            <li className="sidebar-link sidebar-link--close">
              <CloseIcon fontSize="inherit" />
            </li>

            {user?.username ? (
              <div className="sidebar-link user-details">
                <span>{user.username}</span>
                <div className="user--details">
                  <div className="user--details-dashboard">
                    {user.profilePicture && (
                      <img src={user.profilePicture} alt="" />
                    )}
                    DASHBOARD
                  </div>
                  <div className="user--details-logout">LOGOUT</div>
                </div>
              </div>
            ) : (
              <Link to="/signin" className="sidebar-link">
                Sign in
              </Link>
            )}

            <li className="sidebar-link">Shop</li>
            <li className="sidebar-link">Service</li>
            <li className="sidebar-link">Contact</li>
            <li className="sidebar-link">About us</li>
            <li className="sidebar-link">
              <ul className="sidebar-link__company-links">
                <li className="company-links__link">Shipping & returns</li>
                <li className="company-links__link">Terms & conditions</li>
                <li className="company-links__link">Pricacy Policy</li>
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
