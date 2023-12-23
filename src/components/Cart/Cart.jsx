import "./Cart.css"
import { useDispatch, useSelector } from "react-redux"
import CloseIcon from "@mui/icons-material/Close"
import { setCartOpen } from "../../app/Slices/interactionSlice"
import { cartdataDummy } from "../../Details/Details"
import CartItem from "./cartItem/CartItem"
const Cart = () => {
  const dispatch = useDispatch()
  const cartOpen = useSelector(state => state.cartOpen)
  return (
    <div className={`cart ${cartOpen ? "cart--open" : ""}`}>
      <div className="cart-top" onClick={() => dispatch(setCartOpen())}>
        <span className="cart-top-name">Shopping Cart</span>
        <span className="cart-top__icon">
          <CloseIcon fontSize="inherit" />
        </span>
      </div>
      {cartdataDummy.map((item, i) => (
        <CartItem
          key={i}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          img={item.img}
        />
      ))}
      <div className="cart-subtotal">
        <h5>Subtotal</h5>
        <h5>$100</h5>
      </div>
      <div className="cart-gift_message">
        <input type="text" placeholder="Gift Message" />
      </div>
      <div className="cart-checkout">
        <div className="cart-checkout__message">
          <span className="--caption">
            Shipping & taxes calculated at checkout.
          </span>
          <span className="--caption">Free standard shipping within kyiv</span>
        </div>
        <div className="cart-checkout__btn btn btn--primary ">Check Out</div>
      </div>
    </div>
  )
}

export default Cart
