import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import About1 from '../../assets/about1.jpg';
import About2 from '../../assets/about2.jpg';
import About3 from '../../assets/about3.jpg';
import About4 from '../../assets/about4.jpg';
import LinkText from '../../components/LinkText/LinkText';
import Layout from './../../components/Layout/Layout';
import './About.css';
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout>
        <section className="hero-section">
          <div className="hero-details --animated-border">
            <div className="hero-details__wrapper">
              <h3 className="--animated-text">OUR STORY</h3>
              <h4>
                <i>ABOUT</i>
              </h4>
              <h3 className="--animated-text">Kyiv LuxeBouquets</h3>
              <p className="--overline --black-90 --animated-text">
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

          <div className="hero__img --animated-border">
            <img src={About1} alt="" className="--animated-imgZoom " />
          </div>
        </section>
        <section className="founder-passion --animated-border ">
          <span className="--overline --animated-text">OUR STORY</span>
          <h2 className="--animated-text">Our Founder&apos;s Passion</h2>
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
          <div className="expertly-crafted__img --animated-border">
            <img src={About2} alt="" className="--animated-imgZoom" />
          </div>
          <div className="expertly-crafted__details --animated-border">
            <h2 className="--animated-text">Expertly Crafted Bouquets</h2>
            <p className="--black-90 --animated-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              soluta suscipit quos id esse ipsam aut, animi laudantium sapiente?
              Aperiam sed voluptates inventore laudantium doloribus optio, nulla
              corrupti ad explicabo!
            </p>
          </div>
        </section>
        <section className="gifts">
          <div className="gifts__details --animated-border">
            <h2 className="--animated-text">Bouquets, Gifts & Ambiance</h2>
            <p className="--black-90 --animated-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              soluta suscipit quos id esse ipsam aut, animi laudantium sapiente?
              Aperiam sed voluptates inventore laudantium doloribus optio, nulla
              corrupti ad explicabo!
            </p>
          </div>
          <div className="gifts__img --animated-border">
            <img src={About3} alt="" className="--animated-imgZoom" />
          </div>
        </section>
        <section className="special">
          <div className="special__img --animated-border">
            <img src={About4} alt="" className="--animated-imgZoom" />
          </div>
          <div className="special__details --animated-border">
            <h2 className="--animated-text">Making Every Day Special</h2>
            <p className="--black-90 --animated-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              soluta suscipit quos id esse ipsam aut, animi laudantium sapiente?
              Aperiam sed voluptates inventore laudantium doloribus optio, nulla
              corrupti ad explicabo!
            </p>
          </div>
        </section>
        <section className="discover --animated-border">
          <h1 className="--animated-text">Discover Our Beautiful Bouquets</h1>
          <p className="--overline -black-90 --animated-text">
            Explore our collection of exquisite bouquets and surprise your loved
            ones with the perfect gift.Click the button below to start shopping
          </p>
          <Link to={'/categories'}>
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
