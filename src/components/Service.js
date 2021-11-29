import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Service = () => {
  const { id } = useParams();
  const services = useSelector((state) => state.services);
  const service = services.services.find((service) => service.id.toString() === id);

  if (service === undefined) return <Navigate to="/services" />;

  return (
    <div className="container-fluid">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-8 d-flex flex-column">
              <img src={service.imageUrl} className="img-fluid w-60 mx-auto" alt="..." />
            </div>
            <div className="col-md-4">
              <div className="card-body px-5">
                <h2 className="card-title text-center mb-lg-5">{service.name}</h2>
                <ul className="list-group border-0 mb-5">
                  <li className="list-group-item list-group-item-light border-0 listbg">{service.description}</li>
                  <li className="list-group-item list-group-item-dark border-0">{service.price}</li>
                  <li className="list-group-item list-group-item-light border-0 listbg">Service Duration 24 hours</li>
                </ul>
              </div>
              <div className="row justify-content-center">
                <button type="button" className="btn btn-light w-50 green text-white fw-bolder rounded-pill mb-3">Reserve</button>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-light green text-white fw-bolder go-back mb-3">B</button>
      </div>
    </div>
  );
};

export default Service;
