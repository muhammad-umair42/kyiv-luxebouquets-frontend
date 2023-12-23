import "./Footer.css"
import InstagramIcon from "@mui/icons-material/Instagram"
import PinterestIcon from "@mui/icons-material/Pinterest"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import TextHoverEffect from "../../LinkText/LinkText"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__newsletter --animated-border">
        <p>
          Remember to offer beautiful flowers from Kyiv Florist Studio
          Valentines Day, Mothers Day, Christmas... Reminds you 7 days before.
          No spam or sharing your address
        </p>
        <input
          className="input--primary --animated-border"
          type="text"
          placeholder="Your Email"
        />
        <div className="btn btn--primary link--dynamic-hover">
          <TextHoverEffect>REMIND</TextHoverEffect>
        </div>
      </div>

      <div className="footer__contacts --animated-border">
        <h5>Contact Us</h5>
        <div className="footer__link-container">
          <span className="footer__link-label">Address</span>
          <span className="footer__link-text">
            <TextHoverEffect>15/4 Khreshchatyk Street, Kyiv</TextHoverEffect>
          </span>
        </div>
        <div className="footer__link-container">
          <span className="footer__link-label">Phone</span>
          <span className="footer__link-text ">
            <TextHoverEffect>+380980099777</TextHoverEffect>
          </span>
        </div>
        <div className="footer__link-container">
          <span className="footer__link-label">General Enquiry:</span>
          <span className="footer__link-text ">
            <TextHoverEffect>Kiev.Florist.Studio@gmail.com</TextHoverEffect>
          </span>
        </div>
        <h5>Follow Us</h5>
        <div className="footer__link-social__container">
          <InstagramIcon
            className="footer__link-social__container-icon"
            style={{ fontSize: "30px" }}
          />
          <PinterestIcon
            style={{ fontSize: "30px" }}
            className="footer__link-social__container-icon"
          />
          <FacebookOutlinedIcon
            style={{ fontSize: "30px" }}
            className="footer__link-social__container-icon"
          />
        </div>
      </div>

      <div className="footer__shop --animated-border">
        <h5>Shop</h5>
        <div className="footer__link-text">
          <TextHoverEffect>All Products</TextHoverEffect>
        </div>
        <div className="footer__link-text">
          <TextHoverEffect>Bouquest Fresh Flowers</TextHoverEffect>
        </div>
        <div className="footer__link-text">
          <TextHoverEffect>Bouquest Dried Flowers</TextHoverEffect>
        </div>
        <div className="footer__link-text">
          <TextHoverEffect>Live Plants</TextHoverEffect>
        </div>
        <div className="footer__link-text ">
          <TextHoverEffect>Designer Vases</TextHoverEffect>
        </div>
        <div className="footer__link-text ">
          <TextHoverEffect>Arama Candles</TextHoverEffect>
        </div>
        <div className="footer__link-text ">
          <TextHoverEffect>Freshener Diffuser</TextHoverEffect>
        </div>
        <h5>Service</h5>
        <div className="footer__link-text ">
          <TextHoverEffect>Flower Subcription</TextHoverEffect>
        </div>
        <div className="footer__link-text ">
          <TextHoverEffect>Weeding and Reception</TextHoverEffect>
        </div>
      </div>

      <div className="footer__about --animated-border">
        <h5>About Us</h5>
        <div className="footer__link-text ">
          <TextHoverEffect>Our Story</TextHoverEffect>
        </div>
        <div className="footer__link-text">
          <TextHoverEffect>Blog</TextHoverEffect>
        </div>
        <div className="footer__gap"></div>
        <div className="footer__link-text">
          <TextHoverEffect>Shipping & returns</TextHoverEffect>
        </div>
        <div className="footer__link-text">
          <TextHoverEffect>Terms & Conditions</TextHoverEffect>
        </div>
        <div className="footer__link-text">
          <TextHoverEffect>Privicy Policy</TextHoverEffect>
        </div>
      </div>
    </footer>
  )
}

export default Footer
