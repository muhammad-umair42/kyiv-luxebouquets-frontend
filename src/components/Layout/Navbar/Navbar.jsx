import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import makeRequest from '../../../api/axios';
import { setCartOpen } from '../../../app/Slices/interactionSlice';
import Cart from '../../Cart/Cart';
import LinkText from '../../LinkText/LinkText';
import NavHamburger from './NavHamburger';
import './Navbar.css';
const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const location = useLocation();
  const currentUrl = location.pathname;
  const navigate = useNavigate();

  const handleLogout = async () => {
    const reqParams = {
      method: 'post',
      url: '/users/logout',
      reqType: 'logout',
      dispatch: dispatch,
    };

    const { resData, success } = await makeRequest(reqParams);
    if (success) {
      toast.success(`${resData}`);
      navigate('/', { replace: true });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="wrapper__left">
          <Link to={'/categories'} className="left__item  link--dynamic-hover">
            <LinkText>Shop</LinkText>
          </Link>
          <a href={currentUrl === '/' ? '/#contact' : '/'}>
            <div className="left__item link--dynamic-hover">
              <LinkText>{currentUrl === '/' ? 'Contact' : 'Home'}</LinkText>
            </div>
          </a>
        </div>
        <div className="wrapper__right">
          {user?.username ? (
            <div className="right__item link--dynamic-hover username">
              <LinkText>{user?.username}</LinkText>
              <div className="right__item--dropdown">
                <Link
                  to={'/userdashboard'}
                  className="right__item--dropdown-section"
                >
                  {user.profilePicture && (
                    <div className="--dropdown-section_img">
                      <img src={user.profilePicture} alt="" />
                    </div>
                  )}
                  <b>DASHBOARD</b>
                </Link>
                <div
                  className="right__item--dropdown-section"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            </div>
          ) : (
            <Link to={'/signin'} className="right__item link--dynamic-hover">
              <LinkText>Sign in</LinkText>
            </Link>
          )}
          <div className=" link--dynamic-hover">
            <div
              className="nav-cart__icon--lg"
              onClick={() => dispatch(setCartOpen())}
            >
              <LinkText>Cart</LinkText>
            </div>
            <Cart />
          </div>
        </div>
      </div>
      <NavHamburger user={user} handleLogout={handleLogout} />
    </nav>
  );
};

export default Navbar;
