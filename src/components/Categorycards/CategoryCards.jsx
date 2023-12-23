/* eslint-disable react/prop-types */
import TextIconBtn from "../TextIconBtn/TextIconBtn"
import "./CategoryCards.css"
const CategoryCards = ({ data }) => {
  return (
    <>
      {data.map((c, i) => (
        <div
          key={i}
          className={`categories btn__arrow--dynamic ${
            i % 2 === 0 ? "categories__even" : "categories__odd"
          }`}
        >
          <div className="categories__category-details --animated-border">
            <div className="category-details__wrapper">
              <h3>{c.name}</h3>
              <TextIconBtn arrow={i % 2 === 0 ? "even" : "odd"} />
            </div>
          </div>
          <div className="categories__category-img --animated-border">
            <img src={c.img} alt="" className="--animated-imgZoom" />
          </div>
        </div>
      ))}
    </>
  )
}

export default CategoryCards
