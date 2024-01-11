import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import makeRequest from '../../api/axios';
import CartItem from '../../components/Cart/cartItem/CartItem';
import LinkText from '../../components/LinkText/LinkText';
import Layout from './../../components/Layout/Layout';
import './Checkout.css';
const Checkout = () => {
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState(0);
  const user = useSelector(state => state.user.user);
  const cart = useSelector(state => state.cart.cartItems);
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    contact: '',
  });
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    contact: '',
    address: '',
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNo: '',
    expiry: '',
    cvc: '',
  });

  const [checkoutDetails, setCheckoutDetails] = useState({
    user: '',
    products: [],
    total: 0,
    shippingAddress: '',
    payment: false,
  });
  const [checkoutStep, setCheckoutStep] = useState({
    information: true,
    shipping: false,
    payment: false,
  });

  const handleCheckout = async () => {
    setCheckoutStep({
      information: false,
      shipping: false,
      payment: false,
    });
    if (
      contactDetails.name === '' ||
      contactDetails.email === '' ||
      contactDetails.contact === '' ||
      shippingDetails.name === '' ||
      shippingDetails.contact === '' ||
      shippingDetails.address === '' ||
      paymentDetails.cardNo === '' ||
      paymentDetails.expiry === '' ||
      paymentDetails.cvc === ''
    ) {
      toast.warn('Please Fill All the Fields');
      return;
    }

    const orderProducts = cart.map(item => {
      return { id: item._id, quantity: item.quantity };
    });
    setCheckoutDetails({
      ...checkoutDetails,
      user: user._id,
      products: orderProducts,
      total: subTotal + 20,
      shippingAddress:
        shippingDetails.name +
        shippingDetails.contact +
        shippingDetails.address,
      payment: true,
    });

    const reqParams = {
      url: '/orders/order/create',
      method: 'post',
      reqData: checkoutDetails,
      reqType: 'createOrder',
      dispatch,
    };

    const { resData, success } = await makeRequest(reqParams);
  };

  useEffect(() => {
    // Calculate total whenever cartItems change
    window.scrollTo(0, 0);
    const calculateTotal = () => {
      const totalPrice = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.quantity;
      }, 0);

      setSubTotal(totalPrice);
    };

    calculateTotal();
  }, [cart]);
  return (
    <Layout>
      <section className="checkout">
        <div className="checkout__user-forms">
          <div className="checkout__notifications">
            <div className="checkout__navigation">
              <span
                style={{
                  fontWeight: `${
                    checkoutStep.information == true ? '600' : '400'
                  }`,
                }}
                className="--animated-text"
              >
                INFORMATION &gt;
              </span>
              <span
                style={{
                  fontWeight: `${
                    checkoutStep.shipping == true ? '600' : '400'
                  }`,
                }}
                className="--animated-text"
              >
                SHIPPING &gt;
              </span>
              <span
                style={{
                  fontWeight: `${checkoutStep.payment == true ? '600' : '400'}`,
                }}
                className="--animated-text"
              >
                PAYMENT &gt;
              </span>
            </div>
          </div>
          <div className="checkout__information">
            <h5
              onClick={() => {
                !checkoutStep.information &&
                  setCheckoutStep({
                    ...checkoutStep,
                    information: true,
                    shipping: false,
                    payment: false,
                  });
              }}
            >
              1 Contact Information
              {!checkoutStep.information && <EditIcon fontSize="24px" />}
            </h5>
            {checkoutStep.information && (
              <>
                {' '}
                <input
                  type="text"
                  value={contactDetails.name}
                  onChange={e =>
                    setContactDetails({
                      ...contactDetails,
                      name: e.target.value,
                    })
                  }
                  className="input--primary --animated-border"
                  placeholder="Name..."
                />
                <input
                  type="email"
                  value={contactDetails.email}
                  onChange={e =>
                    setContactDetails({
                      ...contactDetails,
                      email: e.target.value,
                    })
                  }
                  className="input--primary --animated-border"
                  placeholder="Email..."
                />
                <input
                  type="tel"
                  value={contactDetails.phone}
                  onChange={e =>
                    setContactDetails({
                      ...contactDetails,
                      contact: e.target.value,
                    })
                  }
                  placeholder="Contact#..."
                  className="input--primary --animated-border"
                />
                <div
                  className="btn btn--primary link--dynamic-hover"
                  onClick={() =>
                    setCheckoutStep({
                      information: false,
                      shipping: true,
                      payment: false,
                    })
                  }
                >
                  <LinkText>continue to shipping</LinkText>
                </div>
              </>
            )}
          </div>

          <div className="checkout__shipping --animated-border">
            <h5
              onClick={() => {
                !checkoutStep.shipping &&
                  setCheckoutStep({
                    ...checkoutStep,
                    information: false,
                    shipping: true,
                    payment: false,
                  });
              }}
              className="--animated-text"
            >
              2 Shipping Details{' '}
              {!checkoutStep.shipping && <EditIcon fontSize="24px" />}
            </h5>
            {checkoutStep.shipping && (
              <>
                {' '}
                <input
                  type="text"
                  className="input--primary"
                  placeholder="Recipients Name"
                  value={shippingDetails.name}
                  onChange={e =>
                    setShippingDetails({
                      ...shippingDetails,
                      name: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className="input--primary"
                  placeholder="Recipients Phone#"
                  value={shippingDetails.contact}
                  onChange={e =>
                    setShippingDetails({
                      ...shippingDetails,
                      contact: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  className="input--primary"
                  placeholder="Recipients Address"
                  value={shippingDetails.address}
                  onChange={e =>
                    setShippingDetails({
                      ...shippingDetails,
                      address: e.target.value,
                    })
                  }
                />
                <div
                  className="btn btn--primary link--dynamic-hover"
                  onClick={() =>
                    setCheckoutStep({
                      information: false,
                      shipping: false,
                      payment: true,
                    })
                  }
                >
                  <LinkText>continue to payment</LinkText>
                </div>
              </>
            )}
          </div>
          <div className="checkout__payment --animated-border">
            <h5
              onClick={() => {
                !checkoutStep.payment &&
                  setCheckoutStep({
                    ...checkoutStep,
                    information: false,
                    shipping: false,
                    payment: true,
                  });
              }}
              className="--animated-text"
            >
              3 Payment {!checkoutStep.payment && <EditIcon fontSize="24px" />}
            </h5>
            {checkoutStep.payment && (
              <>
                <span className="--overline">
                  Pay By Card Your Payment is Secure.
                </span>
                <input
                  type="text"
                  className="input--primary"
                  placeholder="Card Number"
                  value={paymentDetails.cardNo}
                  onChange={e =>
                    setPaymentDetails({
                      ...paymentDetails,
                      cardNo: e.target.value,
                    })
                  }
                />
                <div className="checkout__payment-inputs">
                  <input
                    type="text"
                    className="input--primary"
                    placeholder="MM/YY"
                    value={paymentDetails.expiry}
                    onChange={e =>
                      setPaymentDetails({
                        ...paymentDetails,
                        expiry: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className="input--primary"
                    placeholder="CVC"
                    value={paymentDetails.cvc}
                    onChange={e =>
                      setPaymentDetails({
                        ...paymentDetails,
                        cvc: e.target.value,
                      })
                    }
                  />
                </div>
                <div
                  className="btn btn--primary link--dynamic-hover"
                  onClick={handleCheckout}
                >
                  <LinkText>Make a Purchase</LinkText>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="checkout__cart --animated-border">
          <span className="--overline">Order Summary</span>
          {cart.map((item, index) => (
            <CartItem key={index} {...item} img={item.productImage} />
          ))}
          <div className="checkout__cart-total">
            <div className="cart-total__subtotal">
              <span className="--overline">SubTotal</span>
              <span>${subTotal}</span>
            </div>
            <div className="cart-total__total">
              <span className="--overline">Total (Shipping Fee $20 Added)</span>
              <span className="--overline">${subTotal + 20}</span>
            </div>
          </div>
          <div className="checkout__footer">
            <span className="--overline">
              {' '}
              <LockIcon fontSize="24px" />
              Secure Checkout
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
