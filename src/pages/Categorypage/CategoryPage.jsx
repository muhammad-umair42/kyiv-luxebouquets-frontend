import CategoryCards from '../../components/Categorycards/CategoryCards';
import Layout from '../../components/Layout/Layout';
import './CategoryPage.css';

const CategoryPage = () => {
  return (
    <Layout>
      <section className="categorypage">
        <div className="title">
          <h1>Choose a Category</h1>
        </div>
        <div className="categories-section">
          <CategoryCards />
        </div>
      </section>
    </Layout>
  );
};

export default CategoryPage;
