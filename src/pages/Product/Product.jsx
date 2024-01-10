/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import makeRequest from '../../api/axios';
import { addItem } from '../../app/Slices/cartSlice';
import Layout from '../../components/Layout/Layout';
import LinkText from '../../components/LinkText/LinkText';
import './Product.css';

const Product = () => {
  const [quantity, setQuantuty] = useState(1);
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState(null);
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(30);

  let { id } = useParams();
  const [combination, setCombination] = useState(null);

  const [selectedCombination, setSelectedCombination] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const reqParams = {
        url: `/products/product/${id}`,
        reqType: 'getsingleproduct',
        method: 'get',
      };
      const { resData, success } = await makeRequest(reqParams);
      if (success) {
        setProduct(resData);
      }
    };

    fetchData();
    const fetchSimilarData = async () => {
      const reqParams = {
        url: `categories/category/similarproducts/${id}`,
        reqType: 'getsimilarproducts',
        method: 'get',
      };
      const { resData, success } = await makeRequest(reqParams);
      if (success) {
        setSimilarProducts(resData.similarProducts);
      }
    };
    fetchSimilarData();

    setWindowWidth(window.innerWidth);

    // Adjust centerSlidePercentage based on screen width
    if (window.innerWidth < 768) {
      setCenterSlidePercentage(70);
    } else if (window.innerWidth >= 1024) {
      setCenterSlidePercentage(30);
    } else {
      setCenterSlidePercentage(30); // Default for smaller screens
    }
  }, [id]);

  const handleCart = () => {
    dispatch(
      addItem({
        _id: product?._id,
        name: product?.name,
        price: product?.price,
        quantity,
        productImage: product?.productImage,
      }),
    );
    combination && dispatch(addItem(combination));
    toast.success('Item added to cart');
    setSelectedCombination(null);
  };
  return (
    <Layout>
      <section className="singleproduct">
        <div className="singleproduct__product">
          <div className="singleproduct__img">
            <img src={product?.productImage} alt="Product Image" />
          </div>
          <div className="singleproduct__details">
            <b>/ {product?.name}</b>
            <h3>
              {product?.name} - ${product?.price}
            </h3>
            <p className="singleproduct__details-p">{product?.description}</p>
            <div className="product__quantity">
              <span>Quantity</span>
              <div className="quantity__btns">
                <span
                  className="quantity__btn"
                  onClick={e =>
                    setQuantuty(quantity == 1 ? quantity : quantity - 1)
                  }
                >
                  -
                </span>
                <span className="quantity">{quantity}</span>
                <span
                  className="quantity__btn"
                  onClick={e =>
                    setQuantuty(quantity == 10 ? quantity : quantity + 1)
                  }
                >
                  +
                </span>
              </div>
            </div>
            {product?.combinations.length !== 0 && (
              <div className="singleproduct__carousel">
                <h5>Excellent Combination with:</h5>

                <Carousel
                  showArrows={true}
                  showThumbs={false}
                  centerMode={true}
                  centerSlidePercentage={centerSlidePercentage}
                  selectedItem={0}
                  showStatus={false}
                  showIndicators={false}
                >
                  {product?.combinations?.map(c => (
                    <div
                      className={`singleproduct__combination ${
                        selectedCombination == c?._id
                          ? 'selectedcombination'
                          : ''
                      }`}
                      key={c?._id}
                      onClick={() => {
                        setSelectedCombination(
                          c._id == selectedCombination ? null : c._id,
                        );
                        setCombination({
                          quantity: 1,
                          _id: c?._id,
                          name: c?.name,
                          price: c?.price,
                          productImage: c?.productImage,
                        });
                      }}
                    >
                      <div className="combination__img">
                        <img src={c?.productImage} alt="" />
                      </div>
                      <span>{c?.name}</span>
                      <span>${c?.price}</span>
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
            <div
              className="btn btn--primary link--dynamic-hover basket__btn"
              style={{ width: '100%' }}
              onClick={handleCart}
            >
              <LinkText>add to basket</LinkText>
            </div>
          </div>
        </div>
        <div className="singleproduct__similarproducts">
          <h3>You may also like</h3>
        </div>
        <div className="similarproducts__products">
          {similarProducts?.map((product, i) => (
            <Link
              to={`/product/${product._id}`}
              className="similarproducts__product"
              key={i}
            >
              <div className="similarproducts__img">
                <img src={product?.productImage} alt="" />
                <div className="similarproducts__details">
                  <span className="--subtitle">{product?.name}</span>
                  <span className="--subtitle">${product?.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Product;
