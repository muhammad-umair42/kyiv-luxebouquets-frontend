/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  SubscriptionFaq,
  flowerSubscriptionHero,
  subscriptionPageCardsDetails,
} from '../../Details/Details';
import SubImg1 from '../../assets/sub1.jpg';
import SubImg2 from '../../assets/sub2.jpg';
import SubImg3 from '../../assets/sub3.jpg';
import SubImg4 from '../../assets/sub4.jpg';
import SubImg5 from '../../assets/sub5.jpg';
import Layout from '../../components/Layout/Layout';
import LinkText from '../../components/LinkText/LinkText';
import Cards from '../Homepage/Why-us Card/Cards';
import './SubscriptionPage.css';

import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';

const SubscriptionPage = () => {
  const [faqQuestionNumber, setFaqQuestionNumber] = useState(null);
  const [plan, setPlan] = useState(null);
  const [deliveryFrequency, setDeliveryFrequency] = useState(null);
  const [deliveriesCount, setDeliveriesCount] = useState(1);
  return (
    <Layout>
      <section className="flower-sub">
        <div className="flower-sub__img">
          <img src={SubImg2} alt="" />
        </div>
        <div className="flower-sub__details">
          <h2>Flower Subscription</h2>
          {flowerSubscriptionHero.map((bullet, i) => (
            <div className="flower-sub__bullet" key={i}>
              <span className="--subtitle">{bullet.title}</span>
              <p className="--caption">&#x2022;{bullet.desc}</p>
            </div>
          ))}
          <div className="flower-sub__btn btn btn--secondary link--dynamic-hover">
            <LinkText>Explore Plans</LinkText>
          </div>
        </div>
      </section>
      <section className="sub-working">
        <div className="sub-working__heading-wrapper">
          <h2 className="sub-working__heading">How does it work?</h2>
        </div>
        <div className="sub-working__cards">
          {subscriptionPageCardsDetails.map((card, i) => (
            <Cards key={i} title={card.title} desc={card.desc} />
          ))}
        </div>
      </section>
      <section className="sub-plans">
        <div className="sub-plans__details">
          <div className="sub-plans__headings">
            <span className="--overline">BUILD YOUR SUBSCRIPTION</span>
            <h2>Selecting a Plan</h2>
            <p className="--black-90">
              Enjoy free shipping on every order and save upto 30%.Every Bouquet
              we deliver is carefully currated to ensure it arrives fresh and
              stunning.To modify,pause,or cancel your subscription,simply log in
              to your account dashboard.You are incomplete control of your
              flower delivery experience.
            </p>
          </div>
          <div className="sub-plans__cards">
            <div className="sub-plans__card">
              <div
                className={`sub-plan__card-top ${
                  plan == 'seasonal' || plan == 'premium' ? '--filter-grey' : ''
                }`}
              >
                <div className="sub-plan__card-img">
                  <img src={SubImg3} alt="" />
                </div>
                <div className="sub-plan__card-details">
                  <div className="sub-plan__card-title --subtitle">Classic</div>
                  <div className="sub-plan__card-benifits__wrapper">
                    <span>&#x2022; Price $45</span>
                    <span>&#x2022; Free Delivery</span>
                    <span>&#x2022; Best for a budget</span>
                    <span>&#x2022; Glass vase with First Delivery</span>
                    <span>&#x2022; Save up to 25%</span>
                  </div>
                </div>
              </div>
              <div
                className="sub-plan__card-btn btn btn--primary link--dynamic-hover"
                onClick={() => setPlan('classic')}
              >
                <LinkText>select</LinkText>
              </div>
            </div>
            <div className="sub-plans__card">
              <div
                className={`sub-plan__card-top ${
                  plan == 'classic' || plan == 'premium' ? '--filter-grey' : ''
                }`}
              >
                <div className="sub-plan__card-img">
                  <img src={SubImg4} alt="" />
                </div>
                <div className="sub-plan__card-details">
                  <div className="sub-plan__card-title --subtitle">
                    Seasonal
                  </div>
                  <div className="sub-plan__card-benifits__wrapper">
                    <span>&#x2022; Price $65</span>
                    <span>&#x2022; Free Delivery</span>
                    <span>&#x2022; Best Seasonal Selections</span>
                    <span>&#x2022; Glass vase with First Delivery</span>
                    <span>&#x2022; Luxury candle with your first delivery</span>
                    <span>&#x2022; Save up to 28%</span>
                  </div>
                </div>
              </div>
              <div
                className="sub-plan__card-btn btn btn--primary link--dynamic-hover"
                onClick={() => setPlan('seasonal')}
              >
                <LinkText>select</LinkText>
              </div>
            </div>
            <div className="sub-plans__card">
              <div
                className={`sub-plan__card-top ${
                  plan == 'classic' || plan == 'seasonal' ? '--filter-grey' : ''
                }`}
              >
                <div className="sub-plan__card-img">
                  <img src={SubImg5} alt="" />
                </div>
                <div className="sub-plan__card-details">
                  <div className="sub-plan__card-title --subtitle">Premium</div>
                  <div className="sub-plan__card-benifits__wrapper">
                    <span>&#x2022; Price $95</span>
                    <span>&#x2022; Free Delivery</span>
                    <span>&#x2022; Premium Arrangement</span>
                    <span>&#x2022; Premium vase with First Delivery</span>
                    <span>&#x2022; Save up to 30%</span>
                  </div>
                </div>
              </div>
              <div
                className="sub-plan__card-btn btn btn--primary link--dynamic-hover"
                onClick={() => setPlan('premium')}
              >
                <LinkText>select</LinkText>
              </div>
            </div>
          </div>
          <div
            className={`sub-plans__option-1 ${
              plan === null ? '--filter-grey --disabled-div' : ''
            }`}
          >
            <h4>How often do you want flowers delivered?</h4>
            <span className="--caption">Select the delivery frequency</span>
            <div className="option-1__options">
              <div
                className={`btn btn--secondary link--dynamic-hover ${
                  deliveryFrequency == 'monthly' ? '--filter-grey' : ''
                }`}
                onClick={() => setDeliveryFrequency('monthly')}
              >
                <LinkText>Monthly</LinkText>
              </div>
              <div
                className={`btn btn--secondary link--dynamic-hover ${
                  deliveryFrequency == 'biweekly' ? '--filter-grey' : ''
                }`}
                onClick={() => setDeliveryFrequency('biweekly')}
              >
                <LinkText>Bi-weekly</LinkText>
              </div>
              <div
                className={`btn btn--secondary link--dynamic-hover ${
                  deliveryFrequency == 'weekly' ? '--filter-grey' : ''
                }`}
                onClick={() => setDeliveryFrequency('weekly')}
              >
                <LinkText>Weekly</LinkText>
              </div>
            </div>
          </div>
          <div
            className={`sub-plans__option-2 ${
              deliveryFrequency === null ? '--disabled-div --filter-grey' : ''
            }`}
          >
            <h4>How Many deliveries would you like ?</h4>
            <span className="--caption">
              Pay once and donot worry about flowers,our bouquets will be
              beautiful and on time.as many times as you need
            </span>
            <div className="option-2__options">
              <div
                className="decrement"
                onClick={() =>
                  setDeliveriesCount(
                    deliveriesCount == 1 ? 1 : deliveriesCount - 1,
                  )
                }
              >
                -
              </div>
              <div className="number">{deliveriesCount}</div>
              <div
                className="increment"
                onClick={() =>
                  setDeliveriesCount(
                    deliveriesCount == 10 ? 10 : deliveriesCount + 1,
                  )
                }
              >
                +
              </div>
            </div>
          </div>
          <div
            className="sub-plan__checkout btn btn--primary link--dynamic-hover"
            disabled={deliveryFrequency == null ? true : false}
          >
            <LinkText>checkout</LinkText>
          </div>
        </div>
        <div className="sub-plans__img">
          <img src={SubImg1} alt="" />
        </div>
      </section>
      <section className="faq">
        <div className="faq__wrapper">
          <h2>Subscription FAQ</h2>
          <div className="faq__questions-wrapper">
            {SubscriptionFaq.map((sub, i) => (
              <div
                className="faq__question"
                key={i}
                onClick={() => {
                  setFaqQuestionNumber(faqQuestionNumber == i ? null : i);
                  console.log(window.innerHeight);
                }}
              >
                <h5>
                  {sub.title}
                  {faqQuestionNumber == i ? (
                    <NorthEastIcon fontSize="24px" />
                  ) : (
                    <SouthEastIcon fontSize="24px" />
                  )}
                </h5>
                <span
                  className={`--caption ${
                    faqQuestionNumber == i ? 'question--open' : ''
                  }`}
                >
                  {sub.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SubscriptionPage;
