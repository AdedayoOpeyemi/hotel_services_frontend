import React from 'react';
import { useSelector } from 'react-redux';

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
            <div className="card border-0 w-100 px-5">
              <img src={imageUrl} className="img-fluid imgcont" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title text-center">{name}</h5>
                <p className="card-text">{description}</p>
                {/* <a href="#" className="stretched-link" />  */}
              </div>

            </div>
          </div>
        ))}
      {' '}

    </div>
  );
}

export default ServiceCards;
