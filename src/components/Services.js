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
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <h1 className="text-center text-uppercase fw-bolder tittle">
          All Services
        </h1>
        <p className="fw-lighter text-center mb-3 fw-bold grey">
          Please select a Service
        </p>
        <p className="text-center fw-lighter grey">***************</p>
        <CarouselReact />
      </div>
    </div>
  );
}

export default Services;
