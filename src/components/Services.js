import React from 'react';
import Carousel from './Carousel';

function Services() {
  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <row>
          <h1 className="text-center fw-bolder">
            All Services
          </h1>
          <p className="fw-lighter text-center">
            Please select a Service
          </p>
          <Carousel />
        </row>
      </div>

    </div>
  );
}

export default Services;
