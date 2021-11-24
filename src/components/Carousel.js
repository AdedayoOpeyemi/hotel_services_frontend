import React from 'react';
import PropTypes from 'prop-types';
import ServicesCard from './ServicesCard';

function Carousel({ services }) {
  return (
    <div className="container w-75 mh-50">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner ">
          <div className="carousel-item active">
            { services.map(({
              name, description, imageUrl, id,
            }) => (
              <ServicesCard
                key={id}
                name={name}
                description={description}
                imageUrl={imageUrl}
              />
            ))}
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
  })).isRequired,
};

export default Carousel;
