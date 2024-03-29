/* eslint-disable react/no-unescaped-entities */
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import FlowerRating from '../../assets/FlowerRating.png';
import Home1 from '../../assets/home1.jpg';
import Home2 from '../../assets/home2.jpg';
import Home3 from '../../assets/home3.jpg';
import CategoryCards from '../../components/Categorycards/CategoryCards';
import Layout from '../../components/Layout/Layout';
import LinkText from '../../components/LinkText/LinkText';
import { WhyChooseUs, homePageData } from './../../Details/Details';
import ReviewCarousel from './../../components/Carousel/ReviewCarousel';
import './HomePage.css';
import Cards from './Why-us Card/Cards';
const HomePage = () => {
  const [userContact, setUserContact] = useState('');
  const user = useSelector(state => state.user.user);
  return (
    <>
      <Layout>
        <div className="Home" id="Home">
          {/*------------------------------------------- Hero Section----------------------------------------------------- */}
          <section className="hero">
            <div className="hero__left ">
              <div className="left__top--hero ">
                <div className="top--hero__title --animated-text">
                  <h1>Kyiv &nbsp;</h1>
                  <h1 className="top--hero__title--responsive">
                    <span>Luxe</span>Bouquets&#174;
                  </h1>
                </div>
                <p className="--subtitle --weight-regular --animated-text">
                  Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
                  Spread Joy with Our
                  <span className="--subtitle --weight-regular">
                    &nbsp; Online Flower Delivery Service
                  </span>
                </p>
              </div>

              <div className="left__bottom--hero --animated-border">
                <div className="bottom__img --animated-imgShow">
                  <img src={Home1} alt="Img" />
                </div>

                <div className="bottom__caption --animated-border">
                  <p className="--caption-sm --animated-text ">
                    {homePageData.heroSectionImgMessage}
                  </p>
                </div>
              </div>
            </div>

            <div className="hero__right">
              <CategoryCards slice={true} />
            </div>
          </section>

          {/*------------------------------------------------- About Us Section-------------------------------------------- */}

          <section className="about">
            <div className="about__left --animated-border">
              <h2 className="--animated-text">About us</h2>
            </div>

            <div className="about__right --animated-border">
              <span className="--overline">OUR STORY</span>
              <div className="right__content--hero">
                <h3 className="--animated-text">Kyiv LuxeBouquets</h3>
                <p className="--black-90 --animated-text">
                  {homePageData.aboutUsMessage}
                </p>
              </div>
              <Link
                to={'/about'}
                className="btn btn--secondary about__btn link--dynamic-hover --animated-border"
              >
                <LinkText>learn more</LinkText>
              </Link>
            </div>
          </section>

          {/*--------------------------------------------------- Why Choose Us Section--------------------------------------------- */}

          <section className="whyus">
            <div className="whyus-left --animated-border">
              <h2 className="--animated-text">Why Choose us?</h2>
            </div>

            <div className="whyus-right">
              {WhyChooseUs.map((card, index) => (
                <Cards key={index} title={card.title} desc={card.desc} />
              ))}
            </div>
          </section>

          {/*---------------------------------------------- Contact Section------------------------------------------- */}

          <section className="contact" id="contact">
            <div className="contact__left --animated-border">
              <div className="left__getdetails">
                <h2 className="--aninmated-text">Let's Talk</h2>
                <p className="subtitle --animated-text">
                  Enter your number and we'll call you back ASAP to help you
                  with any questions or to place an order
                </p>
                <div className="left__getdetails-input">
                  <input
                    type="tel"
                    value={userContact}
                    onChange={e => setUserContact(e.target.value)}
                    placeholder="0300-0000000"
                    className="input--primary --animated-border"
                    minLength={11}
                    maxLength={11}
                  />
                  <div
                    className="btn btn--primary link--dynamic-hover"
                    onClick={() => {
                      userContact.length === 11
                        ? toast.success('We will contact you soon!')
                        : toast.error('Privide your Correct Number');
                    }}
                  >
                    <LinkText>reach now</LinkText>
                  </div>
                </div>
              </div>

              <div className="left__ourdetails">
                <div className="left__ourdetails-item--contact">
                  <h3 className="--animated-text --animated-border">Phone</h3>
                  <div className="ourdetails-item__wrapper">
                    <div className="wrapper__info">
                      <WifiCalling3Icon fontSize="inherit" />
                      <span className="--overline --animated-text">
                        +999 9999999
                      </span>
                    </div>
                    <div className="wrapper__info">
                      <WifiCalling3Icon fontSize="inherit" />
                      <span className="--overline --animated-text">
                        +888 8888888
                      </span>
                    </div>
                  </div>
                </div>

                <div className="left__ourdetails-item--contact">
                  <h3 className="--animated-text --animated-border">Address</h3>
                  <div className="ourdetails-item__wrapper --animated-border">
                    <div className="wrapper__info">
                      <span className="--overline --animated-text">
                        OPENING HOURS: 8 A.M TO 11 P.M
                      </span>
                    </div>
                    <div className="wrapper__info">
                      <MyLocationIcon fontSize="inherit" />
                      <span className="--overline --animated-text">
                        15/4 Khreshchatyk Street, Kyiv
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact__right --animated-border">
              <div className="right__img--contact">
                <img src={Home2} alt="Img" className="--animated-imgZoom" />
              </div>
              <div className="right__links-wrapper--contact">
                <h3 className="--animated-border --aninmated-text">
                  Follow us
                </h3>
                <div className="links-wrapper__link">
                  <InstagramIcon
                    className="wrapper-link__link-icon"
                    fontSize="inherit"
                  />

                  <FacebookOutlinedIcon
                    className="wrapper-link__link-icon"
                    fontSize="inherit"
                  />

                  <PinterestIcon
                    className=" wrapper-link__link-icon  "
                    fontSize="inherit"
                  />
                </div>
              </div>
            </div>
          </section>

          {/*-------------------------------------------- Services Section-------------------------------------------------- */}

          <section className="services">
            <h2 className="--animated-border --animated-text">Our Service</h2>
            <div className="services-main">
              <div className="services-main__img">
                <img
                  src={Home3}
                  alt="serviceImg"
                  className="--animated-imgZoom"
                />
              </div>

              <div className="services-main__right">
                <div className="--overline ">SERVICE</div>
                <h2 className="--animated-text">Flower Subcriptions</h2>
                <p className="--black-90 --animated-text">
                  {homePageData.flowerSubcriptionMessage}
                </p>
                <Link
                  to={`${
                    user?.subscribed?.isSubscribed
                      ? '/userdashboard'
                      : '/subscription'
                  }`}
                  className="services-main__btn btn  btn--secondary link--dynamic-hover --animated-border"
                >
                  <LinkText>
                    {user?.subscribed?.isSubscribed
                      ? 'UN SUBSCRIBE'
                      : 'Subscribe now'}
                  </LinkText>
                </Link>
              </div>
            </div>

            <div className="services-footer">
              <div className="--overline">SERVICE</div>
              <h2 className="--animated-text">Wedding & Event Decor</h2>
              <p className="--animated-text">{homePageData.weddingMessage}</p>
              <div className="btn btn--tertiary services-footer__btn link--dynamic-hover --animated-border">
                <LinkText>INQUIRE NOW</LinkText>
              </div>
            </div>
          </section>

          {/*------------------------------------------Clients Reviews----------------------------------------  */}

          <section className="reviews --animated-border">
            <div className="reviews-heading">
              <div className="reviews-heading__fiveflowers">
                <img src={FlowerRating} alt="Img" />
                <img src={FlowerRating} alt="Img" />
                <img src={FlowerRating} alt="Img" />
                <img src={FlowerRating} alt="Img" />
                <img src={FlowerRating} alt="Img" />
              </div>
              <span className="--outline --black-90 ">Reviews</span>
              <h2 className="--animated-text">Our Clients Say</h2>
            </div>
            <ReviewCarousel />
          </section>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
