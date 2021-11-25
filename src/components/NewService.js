import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useValidateImageURL } from 'use-validate-image-url';
import { postService } from '../redux/service/service_duck';
import videos from './assets/box.mp4';
import isServiceValid from '../utils/serviceValidation';
import ValidationError from './ValidationError';

function NewService() {
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  });

  const [validation, setValidation] = useState({
    valid: false,
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  });
  const imageUrlStatus = useValidateImageURL(newService.imageUrl);
  const services = useSelector((state) => state.services);
  const navigate = useNavigate();

  const handleTextChange = (field) => (e) => {
    setNewService((state) => ({
      ...state,
      [field]: e.target.value,
    }));
  };

  const dispatch = useDispatch();
  const dispatchService = () => {
    const newValidation = isServiceValid({
      ...newService,
      imageUrlStatus,
    }, services.services);
    setValidation(newValidation);
    if (newValidation.valid) {
      const serviceToPost = {
        ...newService,
        price: Math.round(newService.price * 100),
      };
      dispatch(postService(serviceToPost)).then(() => {
        navigate('/services');
      });
    }
  };

  return (
    <header>
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={videos} type="video/mp4" />
      </video>
      <div className="container text-white px-5">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="row">
            <h1 className="text-center mb-5">Create a new Service</h1>
            <div className="row">
              <div className="mb-3">
                <div className="input-group">
                  <div className="input-group-prepend" />
                  <input type="text" className="form-control text-center rounded-pill mb-3" placeholder="Service name" aria-label="service_name" aria-describedby="basic-addon1" onChange={handleTextChange('name')} />
                </div>
                {validation.name
               && <ValidationError errorMessage={validation.name} />}
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <div className="input-group">
                  <div className="input-group-prepend" />
                  <input type="text" className="form-control text-center rounded-pill mb-3" placeholder="Service Description" aria-label="Service_description" aria-describedby="basic-addon1" onChange={handleTextChange('description')} />

                </div>
                {validation.description
                 && <ValidationError errorMessage={validation.description} />}
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <div className="input-group">
                  <div className="input-group-prepend" />
                  <input type="number" min="0" className="form-control text-center rounded-pill mb-3" placeholder="Service Price" aria-label="Service_price" aria-describedby="basic-addon1" onChange={handleTextChange('price')} />
                </div>
                {validation.price
                 && <ValidationError errorMessage={validation.price} />}
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <div className="input-group">
                  <div className="input-group-prepend" />
                  <input type="text" className="form-control text-center rounded-pill mb-3" placeholder="Service image URL" aria-label="Service_image" aria-describedby="basic-addon1" onChange={handleTextChange('imageUrl')} />
                </div>
                {validation.imageUrl
                 && <ValidationError errorMessage={validation.imageUrl} />}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button type="button" className="btn btn-light w-100 textg fw-bolder rounded-pill mb-3" onClick={dispatchService}>Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NewService;
