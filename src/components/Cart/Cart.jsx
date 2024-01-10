import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setCartOpen } from '../../app/Slices/interactionSlice';
import './Cart.css';
import CartItem from './cartItem/CartItem';
const Cart = () => {
  const cart = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const cartOpen = useSelector(state => state.interaction.cartOpen);
  const [total, setTotal] = useState(0);
  const [giftMessage, setGiftMessage] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    // Calculate total whenever cartItems change
    const calculateTotal = () => {
      const totalPrice = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.quantity;
      }, 0);

      setTotal(totalPrice);
    };

    calculateTotal();
  }, [cart]);
  const handleSubmit = () => {
    if (cart.length === 0) {
      return toast.warn('Cart is empty');
    }

    navigate('/checkout', { replace: true });
  };
  return (
    <div className={`cart ${cartOpen ? 'cart--open' : ''}`}>
      <div className="cart-top" onClick={() => dispatch(setCartOpen())}>
        <span className="cart-top-name">Shopping Cart</span>
        <span className="cart-top__icon">
          <CloseIcon fontSize="inherit" />
        </span>
      </div>
      {cart?.map((item, i) => (
        <CartItem
          key={i}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          img={item.productImage}
          _id={item._id}
        />
      ))}
      <div className="cart-subtotal">
        <h5>Subtotal</h5>
        <h5>${total}</h5>
      </div>
      <div className="cart-gift_message">
        <input
          type="text"
          placeholder="Gift Message"
          value={giftMessage}
          onChange={e => setGiftMessage(e.target.value)}
        />
      </div>
      <div className="cart-checkout">
        <div className="cart-checkout__message">
          <span className="--caption">
            Shipping & taxes calculated at checkout.
          </span>
          <span className="--caption">Free standard shipping within kyiv</span>
        </div>
        <div
          className="cart-checkout__btn btn btn--primary "
          onClick={handleSubmit}
        >
          Check Out
        </div>
      </div>
    </div>
  );
};

export default Cart;
