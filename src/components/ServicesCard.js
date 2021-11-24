import React from 'react';
import PropTypes from 'prop-types';

function ServicesCard({ name, description, imageUrl }) {
  return (
    <div>
      <div className="card border-0 w-100 px-5">
        <img src={imageUrl} className="img-fluid imgcont" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text">{description}</p>
          {/* <a href="#" className="stretched-link" />  */}
        </div>
      </div>
    </div>
  );
}

ServicesCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ServicesCard;
