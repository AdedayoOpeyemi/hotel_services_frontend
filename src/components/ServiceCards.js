import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ServiceCards() {
  const services = useSelector((state) => state.services);

  return (
    <div>
      { services.services
        && services.services.map(({
          id, name, description, imageUrl,
        }, index) => (
          <div
            key={id}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <Link to={`/services/${id}`}>
              <div className="card border-0 w-100 px-5">
                <img src={imageUrl} className="img-fluid imgcont" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title text-center text-dark">{name}</h5>
                  <p className="card-text text-dark">{description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      {' '}

    </div>
  );
}

export default ServiceCards;
