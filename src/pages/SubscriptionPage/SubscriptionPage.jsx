import Layout from "../../components/Layout/Layout";
import SubImg1 from "../../assets/sub1.jpg";
import SubImg2 from "../../assets/sub2.jpg";
import SubImg3 from "../../assets/sub3.jpg";
import SubImg4 from "../../assets/sub4.jpg";
import SubImg5 from "../../assets/sub5.jpg";
import { flowerSubscriptionHero } from "../../Details/Details";
import LinkText from "../../components/LinkText/LinkText";
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
              <span>{bullet.title}</span>
              <p>{bullet.desc}</p>
            </div>
          ))}
          <div className="btn btn--secondary link--dynamic-hover">
            <LinkText>Explore Plans</LinkText>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SubscriptionPage;
