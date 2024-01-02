/* eslint-disable react/prop-types */

const Cards = ({ title, desc }) => {
  return (
    <div className="info__card --animated-border">
      <h3>{title}</h3>
      <p className="--black-90 --animated-text">{desc}</p>
    </div>
  );
};

export default Cards;
