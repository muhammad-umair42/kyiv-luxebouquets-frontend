/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import makeRequest from '../../api/axios';
import TextIconBtn from '../TextIconBtn/TextIconBtn';
import './CategoryCards.css';
const CategoryCards = (slice = false) => {
  const [data, setData] = useState([]);

  //Getting categories
  useEffect(() => {
    return async () => {
      const reqParams = {
        url: '/categories/',
        method: 'get',
        reqType: 'getcategories',
      };

      const { resData, success } = await makeRequest(reqParams);

      if (slice === true) {
        if (resData.length > 5) {
          setData(resData.splice(0, 5));
          // console.log(resData);
        } else {
          setData(resData);
        }
      } else {
        setData(resData);
      }
    };
  }, []);
  return (
    <>
      {data &&
        data?.map((c, i) => (
          <Link
            to={`/category/${c._id}`}
            key={c._id}
            className={`categories btn__arrow--dynamic ${
              i % 2 === 0 ? 'categories__even' : 'categories__odd'
            }`}
          >
            <div className="categories__category-details --animated-border">
              <div className="category-details__wrapper">
                <h3>{c.name}</h3>
                <TextIconBtn arrow={i % 2 === 0 ? 'even' : 'odd'} />
              </div>
            </div>
            <div className="categories__category-img --animated-border">
              <img
                src={c.categoryImage}
                alt=""
                className="--animated-imgZoom"
              />
            </div>
          </Link>
        ))}
    </>
  );
};

export default CategoryCards;
