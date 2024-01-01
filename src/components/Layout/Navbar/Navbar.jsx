import "./Navbar.css";

import LinkText from "../../LinkText/LinkText";
import NavHamburger from "./NavHamburger";
import { useDispatch, useSelector } from "react-redux";
import { setCartOpen } from "../../../app/Slices/interactionSlice";
import Cart from "../../Cart/Cart";
import { Link } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="wrapper__left">
          <div className="left__item  link--dynamic-hover">
            <LinkText>Shop</LinkText>
          </div>
          <a href="/#contact">
            {" "}
            <div className="left__item link--dynamic-hover">
              <LinkText>Contact</LinkText>
            </div>
          </a>
        </div>
        <div className="wrapper__right">
          {user.username ? (
            <div className="right__item link--dynamic-hover username">
              <LinkText>{user.username}</LinkText>
              <div className="right__item--dropdown">
                <div className="right__item--dropdown-section">
                  {user.profilePicture && (
                    <div className="--dropdown-section_img">
                      <img src={user.profilePicture} alt="" />
                    </div>
                  )}
                  <b>DASHBOARD</b>
                </div>
                <div className="right__item--dropdown-section">Logout</div>
              </div>
            </div>
          ) : (
            <Link to={"/signin"} className="right__item link--dynamic-hover">
              <LinkText>Sign in</LinkText>
            </Link>
          )}
          <div className=" link--dynamic-hover">
            <div
              className="nav-cart__icon--lg"
              onClick={() => dispatch(setCartOpen())}
            >
              <LinkText>Cart</LinkText>
            </div>
            <Cart />
          </div>
        </div>
      </div>
      <NavHamburger user={user} />
    </nav>
  );
};

export default Navbar;
