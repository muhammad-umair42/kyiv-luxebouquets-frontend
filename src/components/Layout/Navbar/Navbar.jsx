import "./Navbar.css"

import LinkText from "../../LinkText/LinkText"
import NavHamburger from "./NavHamburger"
import { useDispatch } from "react-redux"
import { setCartOpen } from "../../../app/Slices/interactionSlice"
import Cart from "../../Cart/Cart"
import { Link } from "react-router-dom"
const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="wrapper__left">
          <div className="left__item  link--dynamic-hover">
            <LinkText>Shop</LinkText>
          </div>
          <div className="left__item link--dynamic-hover">
            <LinkText>Contact</LinkText>
          </div>
        </div>
        <div className="wrapper__right">
          <Link to={"/signin"} className="right__item link--dynamic-hover">
            <LinkText>Sign in</LinkText>
          </Link>
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
      <NavHamburger />
    </nav>
  )
}

export default Navbar
