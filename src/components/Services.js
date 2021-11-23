import React from 'react';
import Carousel from './Carousel';

function Services() {
  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="row">
          <h1 className="text-center fw-bolder">
            All Services
          </h1>
          <p className="fw-lighter text-center">
            Please select a Service
          </p>
          <Carousel />
          <div className="text-center fs-3 row">
            <div className="col">
              <i className="fab fa-facebook" />
              <i className="fab fa-twitter px-3" />
              <i className="fab fa-instagram" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Services;
