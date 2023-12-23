/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "react-responsive-carousel"
import { carouselReviews } from "../../Details/Details"
const ReviewCarousel = () => {
  return (
    <>
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        stopOnHover
        swipeable
        dynamicHeight
        emulateTouch
        transitionTime={1000}
        width={"90vw"}
      >
        {carouselReviews.map((r, index) => (
          <div key={index} className="client__review">
            <h3 className="client__review-message --weight-regular">
              “{r.review}"
            </h3>
            <div className="client__review-username --subtitle --black-90">
              -{r.username}
            </div>
          </div>
        ))}
      </Carousel>
    </>
  )
}

export default ReviewCarousel
