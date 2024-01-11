import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import './PageNotFound.css';

const PageNotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <section className="pagenotfound">
        <h1 className="--animated-text">404!</h1>
        <h4>OOPS! Page not found</h4>
        <Link to={'/'} className="--overline">
          Go Back
        </Link>
      </section>
    </Layout>
  );
};

export default PageNotFound;
