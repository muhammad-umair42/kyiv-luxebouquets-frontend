import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { useParams } from 'react-router-dom';
import makeRequest from '../../api/axios';
import Layout from '../../components/Layout/Layout';
import LinkText from '../../components/LinkText/LinkText';
import './Product.css';

const Product = () => {
  const [quantity, setQuantuty] = useState(1);

  const [product, setProduct] = useState();

  let { id } = useParams();
  const [combination, setCombination] = useState({
    name: '',
    price: 0,
    productImage: '',
    quantity: 1,
  });

  const [selectedCombination, setSelectedCombination] = useState('');

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
      console.log(resData);
    };

    fetchData();
  }, []);

  const handleSubmit = () => {};
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
            <p>{product?.description}</p>
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
            <div className="singleproduct__carousel">
              <h5>Excellent Combination with:</h5>
              <Carousel
                showArrows={true}
                showThumbs={true}
                centerMode={true}
                centerSlidePercentage={30}
                selectedItem={0}
                showStatus={false}
                showIndicators={false}
              >
                {product?.combinations?.map(c => (
                  <div
                    className={`singleproduct__combination ${
                      selectedCombination == c?._id ? 'selectedcombination' : ''
                    }`}
                    key={c?._id}
                    onClick={() => setSelectedCombination(c._id)}
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
            <div
              className="btn btn--primary link--dynamic-hover"
              style={{ width: '100%' }}
            >
              <LinkText onClick={handleSubmit}>add to basket</LinkText>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
