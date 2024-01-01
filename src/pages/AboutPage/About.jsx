import "./About.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import About1 from "../../assets/about1.jpg";
import About2 from "../../assets/about2.jpg";
import About3 from "../../assets/about3.jpg";
import About4 from "../../assets/about4.jpg";
import Layout from "./../../components/Layout/Layout";
import LinkText from "../../components/LinkText/LinkText";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <Layout>
        <section className="hero-section">
          <div className="hero-details --animated-border">
            <div className="hero-details__wrapper">
              <h3>OUR STORY</h3>
              <h4>
                <i>ABOUT</i>
              </h4>
              <h3>Kyiv LuxeBouquets</h3>
              <p className="--overline --black-90">
                Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
                Spread Joy with Our <i>Online Flower Delivery Service</i>
              </p>
              <div className="hero-details__links">
                <div className="hero-details__link --animated-border">
                  <InstagramIcon fontSize="inherit" />
                </div>
                <div className="hero-details__link --animated-border">
                  <PinterestIcon fontSize="inherit" />
                </div>
                <div className="hero-details__link --animated-border">
                  <FacebookOutlinedIcon fontSize="inherit" />
                </div>
              </div>
            </div>
          </div>

          <div className="hero__img">
            <img src={About1} alt="" />
          </div>
        </section>
        <section className="founder-passion --animated-border">
          <span className="--overline">OUR STORY</span>
          <h2>Our Founder&apos;s Passion</h2>
          <p className="--black-90">
            Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska with the
            goal of bringing unique and exquisite bouquets to the people of
            Kyiv.Natalia has always had a passion for flowers and design, and
            his vision was to create a local floral studio that would specialize
            in the creation and delivery of fresh, beautiful, and distinctive
            bouquets.
          </p>
        </section>
        <section className="expertly-crafted">
          <div className="expertly-crafted__img">
            <img src={About2} alt="" />
          </div>
          <div className="expertly-crafted__details --animated-border">
            <h2>Expertly Crafted Bouquets</h2>
            <p className="--black-90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              soluta suscipit quos id esse ipsam aut, animi laudantium sapiente?
              Aperiam sed voluptates inventore laudantium doloribus optio, nulla
              corrupti ad explicabo!
            </p>
          </div>
        </section>
        <section className="gifts">
          <div className="gifts__details --animated-border">
            <h2>Bouquets, Gifts & Ambiance</h2>
            <p className="--black-90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              soluta suscipit quos id esse ipsam aut, animi laudantium sapiente?
              Aperiam sed voluptates inventore laudantium doloribus optio, nulla
              corrupti ad explicabo!
            </p>
          </div>
          <div className="gifts__img">
            <img src={About3} alt="" />
          </div>
        </section>
        <section className="special">
          <div className="special__img">
            <img src={About4} alt="" />
          </div>
          <div className="special__details --animated-border">
            <h2>Making Every Day Special</h2>
            <p className="--black-90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              soluta suscipit quos id esse ipsam aut, animi laudantium sapiente?
              Aperiam sed voluptates inventore laudantium doloribus optio, nulla
              corrupti ad explicabo!
            </p>
          </div>
        </section>
        <section className="discover --animated-border">
          <h1>Discover Our Beautiful Bouquets</h1>
          <p className="--overline -black-90">
            Explore our collection of exquisite bouquets and surprise your loved
            ones with the perfect gift.Click the button below to start shopping
          </p>
          <Link to={"/categories"}>
            <button className="btn btn--primary link--dynamic-hover">
              <LinkText>Shop Now</LinkText>
            </button>
          </Link>
        </section>
      </Layout>
    </>
  );
};

export default About;
