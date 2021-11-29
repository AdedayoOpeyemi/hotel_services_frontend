import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getServices } from '../redux/service/service_duck';
import Carousel from './Carousel';

function Services() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, []);

  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="row">
          <h1 className="text-center fw-bolder">
            All Services
          </h1>
          <p className="fw-lighter text-center mb-3 text-muted">
            Please select a Service
          </p>
          <p className="text-center fw-lighter text-muted">***************</p>
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
