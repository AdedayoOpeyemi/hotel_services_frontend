import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BiLeftArrow } from 'react-icons/bi';
import { currentService } from '../redux/service/service_duck';

const Service = () => {
  const { id } = useParams();
  const services = useSelector((state) => state.services);
  const service = services.services.find((service) => service.id.toString() === id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (service === undefined) navigate('/services');

  const toReserve = () => {
    dispatch(currentService(parseInt(id, 10)));
    navigate('/reserve');
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-8 d-flex flex-column">
              <img src={service.imageUrl} className="img-fluid w-50 mx-auto" alt="..." />
              <button type="button" className="btn btn-light green text-white fw-bolder go-back mt-auto" aria-label="switch" onClick={() => navigate('/services')}>
                <BiLeftArrow className="imported-icon text-white" />
              </button>
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
                <button type="button" className="btn btn-light w-50 green text-white fw-bolder rounded-pill mb-3" onClick={() => toReserve()}>
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
