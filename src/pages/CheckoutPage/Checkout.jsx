import { useState } from 'react';
import LinkText from '../../components/LinkText/LinkText';
import Layout from './../../components/Layout/Layout';
import './Checkout.css';
const Checkout = () => {
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    contact: '',
  });
  const [checkoutDetails, setCheckoutDetails] = useState({
    user: '',
    products: [],
    quantity: 0,
    total: 0,
    shippingAddress: '',
    payment: false,
  });
  const [checkoutStep, setCheckoutStep] = useState({
    information: true,
    shipping: false,
    payment: false,
  });
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
              >
                INFORMATION &gt;
              </span>
              <span
                style={{
                  fontWeight: `${
                    checkoutStep.shipping == true ? '600' : '400'
                  }`,
                }}
              >
                SHIPPING &gt;
              </span>
              <span
                style={{
                  fontWeight: `${checkoutStep.payment == true ? '600' : '400'}`,
                }}
              >
                PAYMENT &gt;
              </span>
            </div>
          </div>
          <h1>1 Contact Information</h1>
          <div className="checkout__information">
            <input
              type="text"
              value={contactDetails.name}
              onChange={e =>
                setContactDetails({ ...contactDetails, name: e.target.value })
              }
              className="input--primary"
              placeholder="Name..."
            />
            <input
              type="email"
              value={contactDetails.email}
              onChange={e =>
                setContactDetails({ ...contactDetails, email: e.target.value })
              }
              className="input--primary"
              placeholder="Email..."
            />
            <input
              type="number"
              value={contactDetails.phone}
              onChange={e =>
                setContactDetails({
                  ...contactDetails,
                  contact: e.target.value,
                })
              }
              placeholder="Contact#..."
              className="input--primary"
            />
            <div className="btn btn--primary link--dynamic-hover">
              <LinkText>continue to shipping</LinkText>
            </div>
          </div>
        </div>
        <div className="checkout__cart"></div>
      </section>
    </Layout>
  );
};

export default Checkout;
