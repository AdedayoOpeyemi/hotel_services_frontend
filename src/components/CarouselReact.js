import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

function CarouselReact() {
  const services = useSelector((state) => state.services);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <div className="carouselcont">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints} pagination={false}>
          {services.services
        && services.services.map(({
          id, name, description, imageUrl,
        }) => (
          <div
            key={id}
            className="w-100 mx-3"
          >
            <Link to={`/services/${id}`}>
              <div className="card border-0">
                <img src={imageUrl} className="img-fluid imgcont" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title text-center text-dark text-uppercase fw-bolder tittle fs-3">{name}</h5>
                  <p className="text-center fw-lighter grey">***************</p>
                  <p className="card-text grey text-break">{description}</p>
                </div>
              </div>
            </Link>
            <div className="text-center fs-3 row grey">
              <div className="col">
                <i className="fab fa-facebook" />
                <i className="fab fa-twitter px-3" />
                <i className="fab fa-instagram" />
              </div>
            </div>
          </div>
        ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselReact;
