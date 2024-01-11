import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import makeRequest from '../../api/axios';
import Layout from '../../components/Layout/Layout';
import './SingleCategory.css';

const SingleCategory = () => {
  const [data, setData] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const reqParams = {
        url: `/categories/category/${id}`,
        reqType: 'getsinglecategory',
        method: 'get',
      };
      let { resData, success } = await makeRequest(reqParams);

      if (success) {
        setData(resData);
      }
    };
    fetchData();
  }, [id]);
  return (
    <Layout>
      <section className="singlecategory">
        <div
          className="singlecategory__titleimage"
          style={{
            backgroundImage: `url(${data?.category?.categoryImage})`,

            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1>{data?.category?.name}</h1>
        </div>
        <div className="singlecategory__products">
          {data?.category?.categoryProducts?.map(p => (
            <Link
              to={`/product/${p._id}`}
              className="singlecategory__product "
              key={p._id}
            >
              <img
                src={`${p?.productImage}`}
                alt=""
                className="--animated-imgZoom"
              />
              <div className="singlecategory__product-details">
                <span className="--subtitle">{p.name}</span>
                <span className="--overline">${p.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default SingleCategory;
