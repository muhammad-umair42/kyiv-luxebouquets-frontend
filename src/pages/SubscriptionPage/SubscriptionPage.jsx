/* eslint-disable no-unused-vars */
import "./SubscriptionPage.css";
import Layout from "../../components/Layout/Layout";
import SubImg1 from "../../assets/sub1.jpg";
import SubImg2 from "../../assets/sub2.jpg";
import SubImg3 from "../../assets/sub3.jpg";
import SubImg4 from "../../assets/sub4.jpg";
import SubImg5 from "../../assets/sub5.jpg";
import {
  flowerSubscriptionHero,
  subscriptionPageCardsDetails,
} from "../../Details/Details";
import LinkText from "../../components/LinkText/LinkText";
import Cards from "../Homepage/Why-us Card/Cards";
const SubscriptionPage = () => {
  return (
    <Layout>
      <section className="flower-sub">
        <div className="flower-sub__img">
          <img src={SubImg1} alt="" />
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
            <span>BUILD YOUR SUBSCRIPTION</span>
            <h2>Selecting a Plan</h2>
            <p>
              Enjoy free shipping on every order and save upto 30%.Every Bouquet
              we deliver is carefully currated to ensure it arrives fresh and
              stunning.To modify,pause,or cancel your subscription,simply log in
              to your account dashboard.You are incomplete control of your
              flower delivery experience.
            </p>
          </div>
          <div className="sub-plans__cards">
            <div className="sub-plans__card">
              <div className="sub-plan__card-top">
                <div className="sub-plan__card-img">
                  <img src={SubImg3} alt="" />
                </div>
                <div className="sub-plan__card-details">
                  <div className="sub-plan__card-title">Classic</div>
                  <div className="sub-plan__card-benifits__wrapper">
                    <span>&#x2022;Price $45</span>
                    <span>&#x2022;Free Delivery</span>
                    <span>&#x2022;Best for a budget</span>
                    <span>&#x2022;Glass vase with First Delivery</span>
                    <span>&#x2022;Save up to 25%</span>
                  </div>
                </div>
              </div>
              <div className="sub-plan__card-btn btn btn--primary link--dynamic-hover">
                <LinkText>select</LinkText>
              </div>
            </div>
            <div className="sub-plans__card">
              <div className="sub-plan__card-top">
                <div className="sub-plan__card-img">
                  <img src={SubImg4} alt="" />
                </div>
                <div className="sub-plan__card-details">
                  <div className="sub-plan__card-title">Classic</div>
                  <div className="sub-plan__card-benifits__wrapper">
                    <span>&#x2022;Price $65</span>
                    <span>&#x2022;Free Delivery</span>
                    <span>&#x2022;Best Seasonal Selections</span>
                    <span>&#x2022;Glass vase with First Delivery</span>
                    <span>&#x2022;Luxury candle with your first delivery</span>
                    <span>&#x2022;Save up to 28%</span>
                  </div>
                </div>
              </div>
              <div className="sub-plan__card-btn btn btn--primary link--dynamic-hover">
                <LinkText>select</LinkText>
              </div>
            </div>
            <div className="sub-plans__card">
              <div className="sub-plan__card-top">
                <div className="sub-plan__card-img">
                  <img src={SubImg5} alt="" />
                </div>
                <div className="sub-plan__card-details">
                  <div className="sub-plan__card-title">Classic</div>
                  <div className="sub-plan__card-benifits__wrapper">
                    <span>&#x2022;Price $95</span>
                    <span>&#x2022;Free Delivery</span>
                    <span>&#x2022;Premium Arrangement</span>
                    <span>&#x2022;Premium vase with First Delivery</span>
                    <span>&#x2022;Save up to 30%</span>
                  </div>
                </div>
              </div>
              <div className="sub-plan__card-btn btn btn--primary link--dynamic-hover">
                <LinkText>select</LinkText>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SubscriptionPage;
