import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getServices } from '../redux/service/service_duck';
import CarouselReact from './CarouselReact';

function Services() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, []);

  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="row">
          <h1 className="text-center text-uppercase fw-bolder">
            All Services
          </h1>
          <p className="fw-lighter text-center mb-3 text-muted fw-bold">
            Please select a Service
          </p>
          <p className="text-center fw-lighter text-muted">***************</p>
          <CarouselReact />
        </div>
      </div>
    </div>
  );
}

export default Services;
