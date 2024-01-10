import { useDispatch } from 'react-redux';
import { removeItem } from '../../../app/Slices/cartSlice';
import './CartItem.css';
// eslint-disable-next-line react/prop-types
const CartItem = ({ _id, name, quantity, img, price }) => {
  const dispatch = useDispatch();
  const handleRemoveCartItem = () => {
    dispatch(removeItem({ _id }));
  };
  return (
    <div className="cart-item">
      <div className="cart-item__details-container">
        <div className="details-container__img">
          <img src={img} alt="" />
        </div>
        <div className="details-container__details">
          <span className="--overline">{name}</span>
          <p>Quantity ({quantity})</p>
          <span className="--overline">${price}</span>
        </div>
      </div>
      <div
        className="cart-item__btn btn btn--secondary"
        onClick={handleRemoveCartItem}
      >
        remove
      </div>
    </div>
  );
};

export default CartItem;
