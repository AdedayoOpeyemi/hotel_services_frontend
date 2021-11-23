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
            <row className="text-center fs-3"> 
              <div className="col">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter px-3"></i>
              <i className="fab fa-instagram"></i>
              </div>
            </row>
        </row>
      </div>

    </div>
  );
}

export default Services;
